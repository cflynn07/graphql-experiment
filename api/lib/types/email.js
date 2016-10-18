const {
  GraphQLObjectType,
  GraphQLString
} = require('graphql')

module.exports = new GraphQLObjectType({
  name: 'Email',
  fields: {
    from: {
      type: GraphQLString
    },
    subject: {
      type: GraphQLString
    },
    body: {
      type: GraphQLString
    }
  }
})
