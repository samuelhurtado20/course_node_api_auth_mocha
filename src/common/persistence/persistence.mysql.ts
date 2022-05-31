import { createConnection, ConnectionOptions } from 'mysql2/promise'
import * as dotenv from 'dotenv'

// config envirotment
dotenv.config()
dotenv.config({
  path: 'config/' + `${process.env.APP_ENV}.env`
})

const config = {
  host: process.env.db_mysql_host || 'localhost',
  user: process.env.db_mysql_user || 'root',
  password: process.env.db_mysql_password || 'sam18623',
  database: process.env.db_mysql_database || 'api_wallet'
} as ConnectionOptions

export default createConnection(config)
