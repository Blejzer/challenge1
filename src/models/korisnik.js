// const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('korisnik', {
    korisnik_pk: {
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
    }
    // ,
    // role: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   references: {
    //     model: 'role',
    //     key: 'role_pk'
    //   }
    // }
  }, {
    sequelize,
    tableName: 'korisnik',
    schema: 'public',
    timestamps: false,
    indexes: [
      // {
      //   name: "fkidx_221",
      //   fields: [
      //     { name: "role" },
      //   ]
      // },
      {
        name: "korisnik_pk",
        unique: true,
        fields: [
          { name: "korisnik_pk" },
        ]
      },
    ]
  });
};
