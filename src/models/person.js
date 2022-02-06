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
    mobile: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    facility: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'facility',
        key: 'facility_pk'
      }
    }
  }, {
    sequelize,
    tableName: 'person',
    schema: 'public',
    timestamps: false,
    indexes: [
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
