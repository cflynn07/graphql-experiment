module.exports = (sequelize, DataTypes) => {
  const Email = sequelize.define('Email', {
    id: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    account_id: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    from: {
      type: DataTypes.STRING,
      allowNull: false
    },
    received: {
      type: DataTypes.DATE,
      allowNull: false
    },
    body: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'emails',
    createdAt: false,
    updatedAt: false,
    classMethods: {
      getColumns: () => Object.keys(Email.rawAttributes)
      // associate: (models) => {
      //  Email.hasMany()
      //}
    }
  })
  return Email
}
