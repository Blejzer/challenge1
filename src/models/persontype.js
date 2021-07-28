// const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('persontype', {
    pt_pk: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: "ak1_persontype"
    }
  }, {
    sequelize,
    tableName: 'persontype',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "ak1_persontype",
        unique: true,
        fields: [
          { name: "title" },
        ]
      },
      {
        name: "persontype_pk",
        unique: true,
        fields: [
          { name: "pt_pk" },
        ]
      },
    ]
  });
};
