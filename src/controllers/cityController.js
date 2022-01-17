'use strict'

const Controller = require('./mainController')
const CityRepository = require('../repository/cityRepository')
const sequelize = require('../config/database')

class CityController extends Controller {
    constructor(model) {
        super(model)
        this._model = model
        this.findOneByCity = this.findOneByCity.bind(this)
        this.findByCountry = this.findByCountry.bind(this)
        this.findOneWithCountry = this.findOneWithCountry.bind(this)
        this.repo = new CityRepository(sequelize, this._model)
    }

    findOneByCity(req, res) {
        this.repo.findOneByCity(req.body.name).then(data => {
            res.send(data)
        }, err => res.status(400).send(err))
    }

    findByCountry(req, res) {
        this.repo.findAllByCountry(req.params.id).then(data => {
            res.send(data)
        }, err => res.status(400).send(err))
    }

    findOneWithCountry(req, res) {
        this.repo.findOneWithCountry(req.params.id).then(data => {
            res.send(data)
        }, err => res.status(400).send(err))

    }
}

module.exports = CityController