const { Sequelize } = require('sequelize');
module.exports = new Sequelize('challenge_baza', 'challenge', '', {
    host: 'localhost',
    dialect: 'postgres'
});