const models = require('../models/init-models');
const sequelize = require('../config/database');

const Country = models(sequelize).Country;
var countryRepository = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updateCountry: updateCountry
}

function findAll() {
    return Country.findAll();
    // return Country.findAll();
}

function findById(id) {
    return Country.findByPk(id);
}

function deleteById(id) {
    return Country.destroy({ where: { id: id } });
}

function create(country) {
    var newCountry = new Country(country);
    return newCountry.save();
}

function updateCountry(country, id) {
    let updateCountry = {
        country_pk: country.country_pk,
        code: country.code,
        name: country.name
    };
    return Country.update(updateCountry, { where: { country_pk: id } });
}
module.exports = countryRepository;