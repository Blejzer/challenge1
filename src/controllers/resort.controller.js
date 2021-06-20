const httpStatus = require('http-status');
const resortService  = require('../services/resort.service');

const newResort = async (req, res) => {
    const resort = await resortService.newResort(req.body);
    res.status(httpStatus.CREATED).send(resort);
};

const getResortByPk = async (req, res) => {
    const resort = await resortService.queryResortByPk(req.params.id);
    res.status(httpStatus.CREATED).send(resort);
}

const updateResortName = async (req, res) => {
    const resort = await resortService.updateResortByPk(req.params.id, req.body.namer);
    if(resort.name === req.body.namer){
        res.status(httpStatus.ACCEPTED).send(resort);
    }else{
        res.status(httpStatus.NOT_FOUND).send("Name cannot be changed. There was an error");
    }
}

const getResortByPkWithSkiers = async (req, res) => {
    const resort = await resortService.queryResortByPkWithSkiers(req.params.id);
    res.status(httpStatus.CREATED).send(resort);
}

const removeResortByPk = async (req, res) => {
    const resort = await resortService.removeResortByPk(req.params.id);
    if(resort === 1){
        res.status(httpStatus.DELETED).redirect('/resorts');
    }else{
        res.status(httpStatus.NOT_FOUND).send('Cannot find Resort with this ID'+req.params.id + ' to remove. Might already be removed.');
    }
}

/**
 * Get all resorts
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const getResorts = async (req, res) => {
    const resorts = await resortService.queryResorts();
    res.status(httpStatus.CREATED).send(resorts);
}

const getResortsWithSkiers = async (req, res) => {
    const resorts = await resortService.queryResortWithSkiers();
    res.status(httpStatus.CREATED).send(resorts);
}
module.exports = {
    newResort,
    getResortByPk,
    getResortByPkWithSkiers,
    updateResortName,
    removeResortByPk,
    getResorts,
    getResortsWithSkiers
}