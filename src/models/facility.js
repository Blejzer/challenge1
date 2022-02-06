// const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('facility', {
        facility_pk: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: "ak1_facility"
        },
        address: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        city: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'city',
                key: 'city_pk'
            }
        },
        facilitytype: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'facilitytype',
                key: 'ft_pk'
            }
        }
    }, {
        sequelize,
        tableName: 'facility',
        schema: 'public',
        timestamps: false,
        indexes: [
            {
                name: "facility_pk",
                unique: true,
                fields: [
                    { name: "facility_pk" },
                ]
            },
            {
                name: "ak1_facility",
                unique: true,
                fields: [
                    { name: "name" },
                ]
            },
        ]
    });
};
