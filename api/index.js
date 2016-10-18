const express = require('express')
const graphqlHTTP = require('express-graphql')
const { buildSchema } = require('graphql')

const app = express()

const schema = buildSchema(`
  type Query {
    hello: String,
    foo: String
  }
`)
const root = {
  hello: () => 'Hello World! 2',
  foo: () => 'Bar'
}

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true
}))

app.listen(process.env.PORT, () => {
  console.log('listening on port ' + process.env.PORT)
})
