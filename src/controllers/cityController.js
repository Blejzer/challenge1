const cityRepository = require('../repository/cityRepository');
let cityController = {
    addCity: addCity,
    findCities: findCities,
    findCitiesByCountry: findCitiesByCountry,
    findCitiesByCountryId: findCitiesByCountryId,
    findCityById: findCityById,
    updateCity: updateCity,
    deleteById: deleteById
}

function addCity(req, res) {
    let city = req.body;
    cityRepository.create(city).
    then((data) => {
        res.send(data);
    })
        .catch((error) => {
            console.log(error);
            res.send(400, error);
        });
}

function findCityById(req, res) {
    cityRepository.findById(req.params.id).
    then((data) => {
        res.send(data);
    })
        .catch((error) => {
            console.log(error);
        });
}

function deleteById(req, res) {
    cityRepository.deleteById(req.params.id).
    then((data) => {
        res.status(200).json({
            message: "City deleted successfully",
            gig: data
        })
    })
        .catch((error) => {
            console.log(error);
        });
}

function updateCity(req, res) {
    cityRepository.updateCity(req.body, req.params.id).
    then((data) => {
        res.status(200).json({
            message: "City updated successfully",
            city: data
        })
    })
        .catch((error) => {
            console.log(error);
        });
}

function findCities(req, res) {
    cityRepository.findAll().
    then((data) => {
        res.send(data);
    })
        .catch((error) => {
            console.log(error);
        });
}
function findCitiesByCountry(req, res) {
    let country_pk = req.params.id;
    cityRepository.findAllByCountry(country_pk).
    then((data) => {
        res.send(data);
    })
        .catch((error) => {
            console.log(error);
            res.send(400, error);
        });
}
function findCitiesByCountryId(req, res) {
    let country_pk = req.params.id;
    cityRepository.findAllByCountryId(country_pk).
    then((data) => {
        res.send(data);
    })
        .catch((error) => {
            console.log(error);
            res.send(400, error);
        });
}

module.exports = cityController;