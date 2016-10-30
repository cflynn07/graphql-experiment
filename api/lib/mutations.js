const {
  GraphQLID,
  GraphQLNonNull,
  GraphQLString
} = require('graphql')

const AccountObjectType = require('lib/types/account')
const { Account } = require('lib/models')

module.exports.account = {
  type: AccountObjectType,
  args: {
    name: {
      type: GraphQLString
    }
  },
  resolve: (root, params) => Account.create(params)
}
