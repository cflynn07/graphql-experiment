const express = require('express')
const graphqlHTTP = require('express-graphql')
const {
  GraphQLSchema,
  GraphQLObjectType
} = require('graphql')

const queries = require('./queries')

const app = express()

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: queries
  })
})

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}))

app.listen(process.env.PORT, () => {
  console.log('listening on port ' + process.env.PORT)
})
