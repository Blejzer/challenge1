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
    ptd: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ptd',
        key: 'ptd_pk'
      }
    },
    ttype_pk: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ttype',
        key: 'ttype_pk'
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
        name: "fkidx_112",
        fields: [
          { name: "ptd" },
        ]
      },
      {
        name: "fkidx_103",
        fields: [
          { name: "ttype_pk" },
        ]
      },
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
