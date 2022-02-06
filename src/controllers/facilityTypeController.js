'use strict'

const FacilityTypeRepository = require('../repository/facilityTypeRepository')
const sequelize = require('../config/database');
const models = require('../models/init-models')
const Controller = require("./mainController");
const EventTypeRepository = require("../repository/eventTypeRepository");

models(sequelize);
class FacilityTypeController extends Controller{
    constructor(model) {
        super(model)
        this.newFt = this.newFt.bind(this)
    }
    newFt(req, res) {
        res.render('pages/newFt')
    }
}


module.exports = FacilityTypeController