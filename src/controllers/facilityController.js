'use strict';

const sequelize = require('../config/database');
const models = require('../models/init-models')
const Controller = require("./mainController");
const FacilityRepository = require("../repository/facilityRepository");
const CityRepository = require("../repository/cityRepository");
const CountryRepository = require("../repository/countryRepository");

models(sequelize);


class FacilityController extends Controller{
    constructor(model) {
        super(model);
        this._model = model
        this.findAllByCity = this.findAllByCity.bind(this)
        this.newFacility = this.newFacility.bind(this)
        this.newFacility1 = this.newFacility1.bind(this)
        this.repo = new FacilityRepository(sequelize, this._model)
        this.city = new CityRepository(sequelize, 'city')
        this.country = new CountryRepository(sequelize, 'country')
        this.fact = new FacilityRepository(sequelize, 'facilitytype')
    }

    findAllByCity(req, res) {
        this.repo.findAllByCity(req.params.id).then(data => {
            res.send(data)
        }, err => res.status(400).send(err))
    }

    newFacility(req, res) {
        console.log(req.url)
        this.country.findAll().then(ct => {
            res.render('pages/newFacility', {ct: ct})
        }, err => res.status(400).send(err))

    }

    newFacility1(req, res) {
        console.log(req.url)
        this.city.findAllByCountry(req.query.country).then(city => {
            this.fact.findAll().then(ft => {
                console.log(city.length)
                console.log(ft.length)
                res.render('pages/newFacility', {city: city, ft: ft})
            }, err => res.status(400).send(err))
        })

    }

}


module.exports = FacilityController