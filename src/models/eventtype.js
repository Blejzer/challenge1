// const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('eventtype', {
    et_pk: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: "ak1_eventtype"
    }
  }, {
    sequelize,
    tableName: 'eventtype',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "ak1_eventtype",
        unique: true,
        fields: [
          { name: "name" },
        ]
      },
      {
        name: "eventtype_pk",
        unique: true,
        fields: [
          { name: "et_pk" },
        ]
      },
    ]
  });
};
