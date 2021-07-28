// const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('city', {
    city_pk: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    city: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    lat: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    lng: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    admin_name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    capital: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    population: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    population_proper: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'city',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "city_pk",
        unique: true,
        fields: [
          { name: "city_pk" },
        ]
      },
    ]
  });
};
