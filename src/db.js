const { database } = require('./env')
const postgres = require('postgres')

const sql = postgres(database)

module.exports = sql
