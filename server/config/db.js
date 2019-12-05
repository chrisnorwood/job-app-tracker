require('dotenv').config()

module.exports = {
  development: {
    url: process.env.DEV_DATABASE_URL,
    dialect: "postgres",
    operatorsAliases: '0'
  },
  test: {
    url: process.env.TEST_DATABASE_URL,
    dialect: "postgres",
    operatorsAliases: '0'
  },
  production: {
    url: process.env.DATABASE_URL,
    dialect: "postgres",
    operatorsAliases: '0'
  }
}
