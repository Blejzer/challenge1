// const Sequelize = require('sequelize');
const sequelize = require('../../src/config/database');
const models = require('../models/init-models');

// console.log(models(sequelize));

/**
 * Tests the connection to the DB, returning true if the connection succeeds. If the connection
 * fails, an error is thrown.
 */
function testConnection() {

    return sequelize.authenticate()
        .then(() => true);
}

/**
 * Syncs the DB structure with the models defined above.
 *
 * If a { force: true } option is provided, existing tables will be DROPped before the new
 * schema is loaded.
 */
function syncModels(options) {
    options.models = models(sequelize);
    options.force = false;
    console.log('SyncModels options: ', options);
    return sequelize.sync(options);
}

module.exports = {
    testConnection,
    syncModels,
    models: {
        models
    },
    db: sequelize
}
