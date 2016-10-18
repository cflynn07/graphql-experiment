const {
  GraphQLID,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString
} = require('graphql')

const Account = require('lib/types/account')

module.exports.accounts = {
  type: Account,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve: (root, params, options) => {
    console.log('root', root)
    console.log('params', params)

    return {
      from: 'test from ' + params.id,
      subject: 'test subject',
      body: 'test body'
    }
  }
}
