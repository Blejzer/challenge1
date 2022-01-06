const Sequelize = require('sequelize');
const config = require('config');
const dbConfig = config.get('db');



// Define operator aliases to prevent injection attacks
const operatorsAliases = {
    $and: Sequelize.Op.and,
    $or: Sequelize.Op.or,
    $eq: Sequelize.Op.eq,
    $gt: Sequelize.Op.gt,
    $lt: Sequelize.Op.lt,
    $lte: Sequelize.Op.lte,
    $like: Sequelize.Op.like
};
// console.log(dbConfig);

// Initialize database instance
const sequelize = new Sequelize(Object.assign({}, dbConfig, { operatorsAliases:0 }));

module.exports = sequelize;