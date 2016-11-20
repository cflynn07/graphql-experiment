const express = require('express')
const graphqlHTTP = require('express-graphql')
const cors = require('cors')
const {
  GraphQLSchema,
  GraphQLObjectType
} = require('graphql')

const schema = require('./lib/schema')

const app = express()

app.use(cors())

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}))

app.listen(process.env.PORT, () => {
  console.log('listening on port ' + process.env.PORT)
})
