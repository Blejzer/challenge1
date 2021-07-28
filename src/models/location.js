// const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('location', {
    location_pk: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    address: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    city: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'city',
        key: 'city_pk'
      }
    }
  }, {
    sequelize,
    tableName: 'location',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "location_pk",
        unique: true,
        fields: [
          { name: "location_pk" },
        ]
      },
    ]
  });
};
