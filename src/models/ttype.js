// const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ttype', {
    ttype_pk: {
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
    tableName: 'ttype',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pk_ttype",
        unique: true,
        fields: [
          { name: "ttype_pk" },
        ]
      },
    ]
  });
};
