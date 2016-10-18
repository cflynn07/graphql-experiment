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
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve: (root, params) => Account.findById(params.id)
}
