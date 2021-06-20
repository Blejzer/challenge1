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

/**
 * Get resort by Pk
 * @param rid
 * @returns {Promise<Resort<id, name> | null>}
 */
const queryResortByPk = async (rid) => {
    console.log(await Resort.findByPk(rid));
    return Resort.findByPk(rid)
}


/**
 * Update name of the resort
 * @param id
 * @param namer
 * @returns {Promise<[number]>}
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
 * @returns {Promise<Resort<[id,name], Array<Skier>>>}
 */
const queryResortByPkWithSkiers = async (resortBody) => {
    return Resort.findByPk(resortBody, {
        atributes:['name'],
        include: [{
            model: Skier,
            as: 'skiers'
        }]
    });
}

/**
 * Delete resort from the list
 * @param rid
 * @returns {Promise<number>}
 */
const removeResortByPk = async (rid) => {
    return Resort.destroy({
        where: {'id': rid}
    })
}

/**
 * Get resorts
 * @returns {Promise<Array<Resort>>}
 */
const queryResorts = async () => {
    return Resort.findAll({
        attributes: ['id','name'],
        raw : true
    });
};

/**
 * Get resorts with skiers -
 * @returns {Promise<Resort[[id, name], Skier[]]>}
 */
const queryResortWithSkiers = async () => {
    return Resort.findAll({
        attributes: ['id','name'],
        include: [
            {
                model: Skier,
                as: 'skiers',
                attributes: ['name']
            }
        ],
        sort: ['resort.id']
    });
};

module.exports = {
    newResort,
    queryResortByPk,
    queryResortByPkWithSkiers,
    updateResortByPk,
    removeResortByPk,
    queryResorts,
    queryResortWithSkiers
}

