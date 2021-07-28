// const Sequelize = require('sequelize')
// const db = require('../config/database')
// const Resort = require("./resort.model");
//
// const Skier = db.define("skier", {
//
//     name: {
//         type: Sequelize.STRING,
//         allowNull: false
//     }
//
// }, {
//
//     timestamps: false
//
// })
//
// // Creating asociative table using N:M relations
// Skier.belongsToMany(Resort, {
//     through: "skiersresorts",
//     as: "resorts",
//     foreignKey: "rid",
//     timestamps: false
// });
// Resort.belongsToMany(Skier, {
//     through: "skiersresorts",
//     as: "skiers",
//     foreignKey: "sid",
//     timestamps: false
// });
// Skier.beforeValidate((skierInstance) => {
//     if (!skierInstance.name) skierInstance.name = 'Bezimeni skijas'
// })
//
// module.exports = Skier;
//
