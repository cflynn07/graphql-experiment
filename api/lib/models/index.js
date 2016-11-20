const Sequelize = require('sequelize')
const fs = require('fs')
const path = require('path')

const sequelize = require('../utils/sequelize')

const db = {}

// Load models
fs
  .readdirSync(__dirname)
  .filter((file) => (file.indexOf('.') !== 0) && (file !== 'index.js'))
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file))
    db[model.name] = model
  })

// Setup relationships between models
Object
  .keys(db)
  .forEach(function (name) {
    if ('associate' in db[name]) {
      db[name].associate(db)
    }
  })

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
