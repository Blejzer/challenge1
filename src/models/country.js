// const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('country', {
    country_pk: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    code: {
      type: DataTypes.STRING(3),
      allowNull: true,
      unique: "ak2_country"
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: "ak1_country"
    }
  }, {
    sequelize,
    tableName: 'country',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "ak1_country",
        unique: true,
        fields: [
          { name: "name" },
        ]
      },
      {
        name: "ak2_country",
        unique: true,
        fields: [
          { name: "code" },
        ]
      },
      {
        name: "country_pk",
        unique: true,
        fields: [
          { name: "country_pk" },
        ]
      },
    ]
  });
};
