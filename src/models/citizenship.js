// const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('citizenship', {
    country_pk: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'country',
        key: 'country_pk'
      },
      unique: "ind_90"
    },
    person_pk: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'person',
        key: 'person_pk'
      },
      unique: "ind_90"
    }
  }, {
    sequelize,
    tableName: 'citizenship',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "fkidx_84",
        fields: [
          { name: "country_pk" },
        ]
      },
      {
        name: "fkidx_87",
        fields: [
          { name: "person_pk" },
        ]
      },
      {
        name: "ind_90",
        unique: true,
        fields: [
          { name: "person_pk" },
          { name: "country_pk" },
        ]
      },
    ]
  });
};
