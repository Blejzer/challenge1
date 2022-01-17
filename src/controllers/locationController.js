'use strict';

const LocationRepository = require('../repository/locationRepository');
const sequelize = require('../config/database');
const models = require('../models/init-models')
const Controller = require("./mainController");

models(sequelize);

class LocationController extends Controller{
    constructor(model) {
        super(model);
        this._model = model
        this.findAllByCity = this.findAllByCity.bind(this)
        this.repo = new LocationRepository(sequelize, this._model)
    }

    findAllByCity(req, res) {
        this.repo.findAllByCity(req.params.id).then(data => {
            res.send(data)
        }, err => res.status(400).send(err))
    }

}


module.exports = LocationController

