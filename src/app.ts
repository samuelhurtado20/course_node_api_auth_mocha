// Env files
import dotenv from 'dotenv'

import express, { json } from 'express'
import { loadControllers } from 'awilix-express'
import container from './container'

process.env.NODE_ENV = process.env.NODE_ENV || 'development'
process.env.APP_ENV = process.env.APP_ENV || 'development'

dotenv.config({
  path: `${__dirname}` + '/../config/' + `${process.env.APP_ENV}.env`
})

// Create a new express app instance
const app: express.Application = express()

app.use(json())

// Load dependencies
container(app)

// Load controllers
app.use(loadControllers(
  'controllers/*.ts',
  { cwd: __dirname })
)

export { app }
