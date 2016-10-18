
/**
 *  * Initialize and export a singleton instance of Sequelize
 *   */

const Sequelize = require('sequelize')

module.exports = new Sequelize(
  process.env.MYSQL_DATABASE,
  process.env.MYSQL_USER,
  process.env.MYSQL_PASSWORD,
  {
    host: process.env.MYSQL_HOST,
    dialect: 'mysql',
    logging: console.log,
    typeValidation: true,
    benchmark: true,
    retry: {
      max: 5
    },
    pool: {
      maxConnections: 5,
      minConnections: 0,
      maxIdleTime: 1000
    }
  }
)
