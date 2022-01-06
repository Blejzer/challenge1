'use strict';

const PostgreRepository = require('../repository/repository');
const sequelize = require('../config/database');

let repo = new PostgreRepository(sequelize, 'country');
let countryController = {
    // add: add,
    findAll: findCountries,
    findOne: findOne,
    // updateCountry: updateCountry,
    // deleteById: deleteById
}

// function add(req, res) {
//     repo.add(req.body).then(data =>{
//         res.send(data);
//     }, err => res.status(400).send(err));
// }

function findCountries(req, res) {
    repo.findAll().then(data => {
        res.send(data);
    }, err => res.status(400).send(err));

}

function findOne(req, res) {
    repo.findOne(req.params.id).then(data => {
        res.send(data);
    }, err => res.status(400).send(err));
}

module.exports = countryController;

