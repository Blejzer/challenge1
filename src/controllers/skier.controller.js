const httpStatus = require('http-status');
const skierService  = require('../services/skier.service');

const newSkier = async (req, res) => {
    const skier = await skierService.newSkier(req.body);
    res.status(httpStatus.CREATED).send(skier);
};

const newSkierWResort = async (req, res) => {
    const skier = await skierService.newSkierWithResort(req.body);
    res.status(httpStatus.CREATED).send(skier);
};

const removeSkierByPk = async (req, res) => {
    const skier = await skierService.removeSkierByPk(req.params.id);
    if(skier === 1){
        res.status(httpStatus.DELETED).redirect('/skiers');
    }else{
        res.status(httpStatus.NOT_FOUND).redirect('/');
    }
}

const renameSkierByPk = async (req, res) => {
    const skier = await skierService.updateSkierByPk(req.params.id, req.body.names);
    if(skier.name === req.body.names){
        res.status(httpStatus.OK).send(skier);
    }else{
        res.status(httpStatus.NOT_FOUND).send("Name cannot be changed. There was an error");
    }

}

const getSkiers = async (req, res) => {
    const skiers = await skierService.querySkiers();
    res.status(httpStatus.OK).send(skiers);
}

const getSkiersWithResorts = async (req, res) => {
    const skiers = await skierService.getSkiersWithResorts();
    res.status(httpStatus.OK).send(skiers);
}

const getSkierByPk = async (req, res) => {
    const skier = await skierService.querySkierByPk(req.params.id);
    res.status(httpStatus.OK).send(skier);
}

const getSkierByPkWithResorts = async (req, res) => {
    const skier = await skierService.querySkierByPkWithResorts(req.params.id);
    res.status(httpStatus.OK).send(skier);
}

const addResortToSkierByPk = async (req, res) => {
    const skier = await skierService.addResortToSkierByPk(req.params.id, req.body);
    res.status(httpStatus.CREATED).send(skier);
}

const removeResortFromSkierByPk = async (req, res) => {
    const skier = await skierService.remResortFromSkierByPk(req.params.id, req.body);
    res.status(httpStatus.OK).send(skier);
}
module.exports = {
    newSkier,
    newSkierWResort,
    removeSkierByPk,
    renameSkierByPk,

    getSkiers,
    getSkiersWithResorts,

    getSkierByPk,
    getSkierByPkWithResorts,

    addResortToSkierByPk,
    removeResortFromSkierByPk
}