import { fastify } from 'fastify'
import fastifyCors from '@fastify/cors'
import {
  // jsonSchemaTransform,
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider,
} from 'fastify-type-provider-zod'
import { createAccount } from './routes/auth/create-account'

const app = fastify().withTypeProvider<ZodTypeProvider>()

app.setSerializerCompiler(serializerCompiler)
app.setValidatorCompiler(validatorCompiler)

app.register(fastifyCors)

// Routes
app.register(createAccount)

app.listen({ port: 3333 }).then(() => {
  console.log('Server is running on port 3333')
})
