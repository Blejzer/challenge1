// const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('facilitytype', {
        ft_pk: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: "ak1_facilitytype"
        }
    }, {
        sequelize,
        tableName: 'facilitytype',
        schema: 'public',
        timestamps: false,
        indexes: [
            {
                name: "ak1_facilitytype",
                unique: true,
                fields: [
                    { name: "title" },
                ]
            },
            {
                name: "facilitytype_pk",
                unique: true,
                fields: [
                    { name: "ft_pk" },
                ]
            },
        ]
    });
};
