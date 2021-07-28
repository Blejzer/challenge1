// const Sequelize = require('sequelize')
// const db = require('../config/database')
//
// const Resort = db.define('resort', {
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
// Resort.beforeValidate((resortInstance) => {
//     if (!resortInstance.name) resortInstance.name = 'Bezimeno skijaliste'
// })
// module.exports = Resort;