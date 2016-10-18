module.exports = (sequelize, DataTypes) => {
  const Account = sequelize.define('Account', {
    id: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'accounts',
    createdAt: false,
    updatedAt: false,
    classMethods: {
      getColumns: () => Object.keys(Account.rawAttributes),
      associate: (models) => {
        Account.hasMany(
          models.Email,
          { foreignKey: 'account_id' }
        )
      }
    }
  })
  return Account
}
