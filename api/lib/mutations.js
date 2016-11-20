const {
  GraphQLID,
  GraphQLNonNull,
  GraphQLString
} = require('graphql')

const AccountObjectType = require('./types/account')
const { Account } = require('./models')

module.exports.account = {
  type: AccountObjectType,
  args: {
    name: {
      type: GraphQLString
    }
  },
  resolve: (root, params) => Account.create(params)
}
