'use strict'

const sequelize = require('../config/database');
const models = require('../models/init-models')
const Controller = require("./mainController");

models(sequelize);
class PersonTypeController extends Controller{
    constructor(model) {
        super(model)
        this.newPt = this.newPt.bind(this)
    }

    newPt (req, res) {
        res.render('pages/newPt')
    }

}


module.exports = PersonTypeController