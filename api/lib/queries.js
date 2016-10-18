const {
  GraphQLID,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString
} = require('graphql')

const AccountObjectType = require('lib/types/account')
const { Account } = require('lib/models')

module.exports.accounts = {
  type: AccountObjectType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve: (root, params, options) => {
    return Account.findById(params.id)
  }
}
