'use strict';

const Controller = require('./mainController')
const CitizenshipRepository = require("../repository/citizenshipRepository")
const sequelize = require("../config/database")

class CitizenshipController extends Controller {
    constructor(model) {
        super(model)
        this._model = model
        this.findAllByPerson = this.findAllByPerson(this)
        this.findAllByCountry = this.findAllByCountry(this)
        this.repo = new CitizenshipRepository(sequelize, this._model)
    }

    findAllByPerson(req, res) {
        this.repo.findAllByPerson(req.params.id).then(data => {
            res.send(data)
        }, err => res.status(400).send(err))
    }

    findAllByCountry(country) {

    }

}

module.exports = CitizenshipController