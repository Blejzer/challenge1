// const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tdtype', {
    tdtype_pk: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tdtype',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pk_tdtype",
        unique: true,
        fields: [
          { name: "tdtype_pk" },
        ]
      },
    ]
  });
};
