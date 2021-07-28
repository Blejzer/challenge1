// const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('role', {
    role_pk: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: "ak1_role"
    }
  }, {
    sequelize,
    tableName: 'role',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "ak1_role",
        unique: true,
        fields: [
          { name: "name" },
        ]
      },
      {
        name: "role_pk",
        unique: true,
        fields: [
          { name: "role_pk" },
        ]
      },
    ]
  });
};
