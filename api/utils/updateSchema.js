/* eslint-disable no-console */
const chalk = require('chalk')
const fs = require('fs')
const graphql = require('graphql').graphql
const introspectionQuery = require('graphql/utilities').introspectionQuery
const path = require('path')
const printSchema = require('graphql/utilities').printSchema

const schema = require('../lib/schema')

const jsonFile = path.join(__dirname, '../data/schema.json')
const graphQLFile = path.join(__dirname, '../data/schema.graphql')

function updateSchema() {
  graphql(schema, introspectionQuery)
    .then((json) => {
      fs.writeFileSync(jsonFile, JSON.stringify(json, null, 2))
      fs.writeFileSync(graphQLFile, printSchema(schema))
      console.log(chalk.green('Schema has been regenerated'))
    })
    .catch(console.log)
}

// Run the function directly, if it's called from the command line
if (!module.parent) updateSchema()

module.exports = updateSchema
