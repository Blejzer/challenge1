// const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('event', {
    event_pk: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    eventtype: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'eventtype',
        key: 'et_pk'
      }
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: "ak1_event"
    },
    date_from: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    date_till: {
      type: DataTypes.DATEONLY,
      allowNull: false
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
    tableName: 'event',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "ak1_event",
        unique: true,
        fields: [
          { name: "name" },
        ]
      },
      {
        name: "event_pk",
        unique: true,
        fields: [
          { name: "event_pk" },
        ]
      },
    ]
  });
};
