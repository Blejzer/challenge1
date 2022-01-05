const models = require('../models/init-models');
const sequelize = require('../config/database');

const City = models(sequelize).City;
const Country = models(sequelize).Country;
let cityRepository = {
    findAll: findAll,
    create: create,
    findById: findById,
    findAllByCountry: findAllByCountry,
    findAllByCountryId: findAllByCountryId,
    deleteById: deleteById,
    updateCity: updateCity
}

function findAll() {
    return City.findAll();
    // return Country.findAll();
}

function findById(id) {
    return City.findByPk(id);
}

function findAllByCountry(id) {
    return City.findAll({
        include: {
            model: Country,
            as: 'country_country',
            where: {
                country_pk: id
            }
        }
    });
}
function findAllByCountryId(id) {
    return City.findAll({
        where: {
            country: id
        }
    });
}

function deleteById(id) {
    return City.destroy({ where: { id: id } });
}

function create(city) {
    let newCity = new City(city);
    return newCity.save();
}

function updateCity(city, id) {
    let updateCity = {

    };
    return City.update(updateCity, { where: { city_pk: id } });
}
module.exports = cityRepository;