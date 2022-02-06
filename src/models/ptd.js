
// const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ptd', {
    ptd_pk: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    traveldoc_pk: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'traveldoc',
        key: 'traveldoc_pk'
      }
    },
    person_pk: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'person',
        key: 'person_pk'
      }
    },
    valid: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ptd',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "fkidx_1084",
        fields: [
          { name: "traveldoc_pk"},
        ]
      },
      {
        name: "fkidx_1087",
        fields: [
          { name: "person_pk" },
        ]
      },
      {
        name: "ptd_pk",
        unique: true,
        fields: [
          { name: "ptd_pk" },
        ]
      },
    ]
  });
};
