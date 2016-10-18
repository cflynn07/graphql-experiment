const {
  GraphQLList,
  GraphQLObjectType,
  GraphQLString
} = require('graphql')

const Email = require('lib/types/email')

module.exports = new GraphQLObjectType({
  name: 'Account',
  fields: {
    name: {
      type: GraphQLString
    },
    emails: {
      type: new GraphQLList(Email),
      resolve: (account) => account.getEmails()
    }
  }
})
