// const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('traveldoc', {
    traveldoc_pk: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    docnumber: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    issue: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    expire: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    tdtype_pk: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tdtype',
        key: 'tdtype_pk'
      }
    },
    facility_pk: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'facility',
        key: 'facility_pk'
      }
    },
    // city_pk: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   references: {
    //     model: 'city',
    //     key: 'city_pk'
    //   }
    // }
  }, {
    sequelize,
    tableName: 'traveldoc',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "fkidx_102",
        fields: [
          { name: "tdtype_pk" },
        ]
      },
      {
        name: "fkidx_105",
        fields: [
          { name: "facility_pk" },
        ]
      },
      // {
      //   name: "fkidx_108",
      //   fields: [
      //     { name: "city_pk" },
      //   ]
      // },
      {
        name: "pk_traveldoc",
        unique: true,
        fields: [
          { name: "traveldoc_pk" },
        ]
      },
    ]
  });
};
