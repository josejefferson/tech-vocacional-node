require('dotenv/config')

const env = {
  port: process.env.PORT || 3000,
  database: process.env.DATABASE || 3000
}

module.exports = env
