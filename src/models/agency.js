// const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('agency', {
    agency_pk: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: "ak1_agency"
    },
    location: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'location',
        key: 'location_pk'
      }
    }
  }, {
    sequelize,
    tableName: 'agency',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "agency_pk",
        unique: true,
        fields: [
          { name: "agency_pk" },
        ]
      },
      {
        name: "ak1_agency",
        unique: true,
        fields: [
          { name: "name" },
        ]
      },
    ]
  });
};
