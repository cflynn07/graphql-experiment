const {
  GraphQLID,
  GraphQLNonNull
} = require('graphql')

const AccountObjectType = require('./types/account')
const { Account } = require('./models')

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
