const Skier = require('../models/skier.model');
const Resort = require("../models/resort.model");


/**
 * Create new skier
 * @param skierBody
 * @returns {Promise<Skier>}
 */
const newSkier = async (skierBody) => {
    return Skier.create({
        name: skierBody.name
    });
};

/**
 * Create skier with new (or existing) resort
 * @param {Object} skierBody
 * @returns {Promise<Skier>}
 */
const newSkierWithResort = async (skierBody) => {
    return Skier.create({
        name: skierBody.names,
        resorts: [{ name: skierBody.namer }]
    }, {
        include: [{
            model: Resort,
            as: 'resorts'
        }]
    });
};

/**
 * Find skier by Pk
 * @param skierPk - actually id
 * @returns {Promise<Skier>}
 */
const querySkierByPk = async (skierPk) => {
    return Skier.findByPk(skierPk)
}


/**
 * Update name of the skier
 * @param id
 * @param names
 * @returns {Promise<Skier|number>}
 */
const updateSkierByPk = async (id, names) => {

    const skier = await Skier.update(
        {'name': names},
        {
            where: {'id': id}
        });

    if(skier[0] === 1){
        return querySkierByPk(id);
    }else{
        return 1;
    }
}

/**
 * Find skier by Pk
 * @param skierPk - actually id
 * @returns {Promise<Skier>}
 */
const querySkierByPkWithResorts = async (skierPk) => {
    return Skier.findByPk(skierPk, {
        include: [{
            model: Resort,
            as: 'resorts'
        }]
    });
}

/**
 * Delete skier from the list
 * @param id
 * @returns {Promise<number>}
 */
const removeSkierByPk = async (id) => {
    return Skier.destroy(
        {
            where: {'id': id}
    });
}

/**
 * Get all skiers
 * @returns {Promise<Array<Skier>>}
 */
const querySkiers = async () => {
    return Skier.findAll({
        attributes: ['id','name'],
        raw : true
    });
};

/**
 * Get all skiers with resorts
 * @returns {Promise<Array<Skier>>}
 */
const getSkiersWithResorts = async () => {
    return Skier.findAll({
        attributes: ['id', 'name'],
        include: [
            {
                model: Resort,
                as: 'resorts',
                attributes: ['name']
            }
        ],
        order: ['id']
    });
};

/**
 * Ovaj me sekirao
 * @param sid
 * @param body
 * @returns {Promise<*>}
 */
const addResortToSkierByPk = async (sid, body) => {
    const resort = await Resort.findOne({where: {name:body.namer}});
    const skier = await Skier.findByPk(sid, {
        include: [{
            model: Resort,
            as: 'resorts'
        }]
    });
    await skier.addResort(resort);
    return Skier.findByPk(sid, {
        include: [{
            model: Resort,
            as: 'resorts'
        }]
    });
}

/**
 * Removes resort from the skier
 * @param sid
 * @param body
 * @returns {Promise<*>}
 */
const remResortFromSkierByPk = async (sid, body) => {
    const resort = await Resort.findOne({where: {name:body.namer}});
    const skier = await Skier.findByPk(sid, {
        include: [{
            model: Resort,
            as: 'resorts'
        }]
    });
    await skier.removeResort(resort);
    return Skier.findByPk(sid, {
        include: [{
            model: Resort,
            as: 'resorts'
        }]
    });
}


module.exports = {
    newSkier,
    newSkierWithResort,
    removeSkierByPk,
    updateSkierByPk,
    querySkiers,
    getSkiersWithResorts,
    querySkierByPk,
    querySkierByPkWithResorts,
    addResortToSkierByPk,
    remResortFromSkierByPk
}

