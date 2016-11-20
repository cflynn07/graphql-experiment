const {
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString
} = require('graphql')

const Email = require('./email')

module.exports = new GraphQLObjectType({
  name: 'Account',
  fields: {
    id: {
      type: GraphQLID // new GraphQLNonNull(GraphQLID)
    },
    name: {
      type: GraphQLString
    },
    emails: {
      type: new GraphQLList(Email),
      resolve: (account) => account.getEmails()
    }
  }
})
