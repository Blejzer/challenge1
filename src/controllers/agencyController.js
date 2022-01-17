'use strict';

const AgencyRepository = require('../repository/agencyRepository');
const sequelize = require('../config/database');
const models = require('../models/init-models')
const Controller = require("./mainController");

models(sequelize);


class AgencyController extends Controller {
    constructor(model) {
        super(model);
        this._model = model
        this.findAllByCountry = this.findAllByCountry.bind(this)
        this.repo = new AgencyRepository(sequelize, this._model)
    }

    /*TODO findAllByCountry(req, res) {
        this.repo.findAllByCountry(req.params.id).then(data => {
            res.send(data)
        }, err => res.status(400).send(err))
     }
     */

}

module.exports = AgencyController

