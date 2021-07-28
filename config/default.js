/**
 * Default configuration for the shipping connector. This file will be overriden
 * by environment-specific configs, eg. /config/production.js.
 */
module.exports = {
    /**
     * The connector will listen for HTTP requests on this port.
     */
    // port: 3000,

    /**
     * A pre-defined secret token that will be used to authenticate
     * incoming API requests from AppDirect. Simply compare the incoming
     * bearer token with the shared auth secret and accept the request
     * if the token matches the value defined here.
     *
     * Do not expose secrets in code or config files. Instead, set the
     * SHARED_AUTH_SECRET environment variable and this connector will
     * use it automatically.
     */
    // sharedAuthSecret: '',

    db: {
        host: 'localhost',

        database: 'challenge_baza',

        username: 'challenge',

        dialect: 'postgres',

        logging: false,

        define: {
            freezeTableNames: true,
        },

        sync: { force: true }

        // storage: 'db.postgres'
    }
};