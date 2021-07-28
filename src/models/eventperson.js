// const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('eventperson', {
    ep_pk: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    event: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'event',
        key: 'event_pk'
      }
    },
    person: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'person',
        key: 'person_pk'
      }
    },
    persontype: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'persontype',
        key: 'pt_pk'
      }
    }
  }, {
    sequelize,
    tableName: 'eventperson',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "eventperson_pk",
        unique: true,
        fields: [
          { name: "ep_pk" },
        ]
      },
    ]
  });
};
