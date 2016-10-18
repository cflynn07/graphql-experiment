const {
  GraphQLList,
  GraphQLObjectType,
  GraphQLString
} = require('graphql')

const Email = require('lib/types/email')

module.exports = new GraphQLObjectType({
  name: 'Account',
  fields: {
    owner: {
      type: GraphQLString
    },
    emails: {
      type: new GraphQLList(Email),
      resolve: function () {
        console.log('arguments', arguments)
        return [{
          from: 'from 1',
          subject: 'subject 1',
          body: 'body 1'
        }]
      }
    }
  }
})
