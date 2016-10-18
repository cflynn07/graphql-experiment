const {
  GraphQLID,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString
} = require('graphql')

const TypeAccount = new GraphQLObjectType({
  name: 'Account',
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

module.exports.accounts = {
  type: TypeAccount,
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
