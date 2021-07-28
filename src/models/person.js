// const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('person', {
    person_pk: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    lastname: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    pposition: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    citizenship: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    dob: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    cob: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'city',
        key: 'city_pk'
      }
    },
    agency: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'agency',
        key: 'agency_pk'
      }
    },
    traveldoc: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'traveldoc',
        key: 'traveldoc_pk'
      }
    }
  }, {
    sequelize,
    tableName: 'person',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "fkidx_111",
        fields: [
          { name: "traveldoc" },
        ]
      },
      {
        name: "person_pk",
        unique: true,
        fields: [
          { name: "person_pk" },
        ]
      },
    ]
  });
};
