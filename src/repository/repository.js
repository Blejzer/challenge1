'use strict';

// to make sure that this is connected to the right instance...
const autoBind = require('auto-bind');

/**
 *
 */
class PostgreRepository {
    constructor(sequelize, modelType) {
        this.sequelize = sequelize;
        if (modelType === undefined) {
            throw new Error('Postgre model type cannot be null.');
        }
        try{
            this.collection = sequelize.model(modelType);
        } catch (error) {
            throw new Error(error);
        }

        autoBind(this);
    }

    /**
     * truncates collection
     */
    clear(cb) {
        this.collection.truncate().then(() => {
            if (cb) {
                cb(null, true);
            }
        }, err => cb && cb(err));
    }

    /**
     * close db connection
     * @returns {void}
     */
    disconnect() {
        this.sequelize.close();
    }

    /**
     * /get
     */
     async findAll () {
        try {
            return await this.collection.findAll({
                raw: true
            }).then(data => {
                return data;
            });
        } catch (err){
            return await err;
        }
    }

    /**
     * Get one entity where pk = id
     * @param id
     * @returns {Promise<*|T>}
     */
    async findOne(id) {
        try {
            return await this.collection.findByPk(id, {
                raw: true
            }).then(data => {
                return data;
            });
        } catch (err){
            return await err;
        }
    }

    /**
     * Create new entity
     * @param entity
     * @returns {Promise<*|*>}
     */
    async add(entity) {
        try {
            return this.collection.create(entity).then(data => {
                return data.toJSON();
            });
        } catch (err){
            return await err;
        }
        // this.collection.create(entity).then(data => {
        //     cb(null, data.toJSON());
        // }, err => cb(err));
    }

    /**
     * Update existing entity using id to find and entity holds changed values.
     * @param entity
     * @param id
     * @returns {Promise<*>}
     */
    async update(entity, id) {
        try {
        let test = await this.collection.findByPk(id);
        if(test){
            return await test.update(entity).then(data => {
                return data;
            });
        }
        } catch (err){
            return await err;
        }

    }

    /**
     * Delete entity where pk = id
     * @param id
     * @returns {Promise<*|*|*|undefined>}
     */
    async remove(id) {
        try {
            let test = await this.collection.findByPk(id);
            if(test){
                return await test.destroy().then(() => {
                    return test;
                });
            }else {
                return 'Entity not found. Might be already removed.'
            }
        } catch (err){
            return await err;
        }

    }

}

module.exports = PostgreRepository;