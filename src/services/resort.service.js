const Resort = require('../models/resort.model');
const Skier = require('../models/skier.model');

/**
 * Create skier
 * @param {Object} resortBody
 * @returns {Promise<Resort>}
 */
const newResort = async (resortBody) => {
    return Resort.create(resortBody)
};

const getResortByPk = async (rid) => {
    return Resort.findByPk(rid)
}


/**
 * Update name of the resort
 * @param namer
 * @returns {Promise<[number, Model<TModelAttributes, TCreationAttributes>[]]>}
 */
const updateResortByPk = async (id, namer) => {

    const resort = await Resort.update(
        {'name': namer},
        {
            where: {'id': id}
        });

    if(resort[0] === 1){
        return getResortByPk(id);
    }else{
        return 1;
    }
}

/**
 * Find skier by Pk
 * @param resortBody - actually id
 * @returns {Promise<Resort<any, TModelAttributes>>}
 */
const queryResortByPkWithSkiers = async (resortBody) => {
    return Resort.findByPk(resortBody, {
        include: [{
            model: Skier,
            as: 'skiers'
        }]
    });
}


const removeResortByPk = async (rid) => {
    return Resort.destroy({
        where: {'id': rid}
    })
}

/**
 * Get skiers
 * @returns {Promise<Array<Resort>>}
 */
const queryResorts = async () => {
    const resorts = await Resort.findAll({
        attributes: ['id','name'],
        raw : true
    });
    return resorts;
};

module.exports = {
    newResort,
    getResortByPk,
    queryResortByPkWithSkiers,
    updateResortByPk,
    removeResortByPk,
    queryResorts
}

