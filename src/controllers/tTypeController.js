'use strict'

const TTypeRepository = require('../repository/tTypeRepository')
const sequelize = require('../config/database');
const models = require('../models/init-models')
const Controller = require("./mainController");

models(sequelize);
class TTypeController extends Controller{
    constructor(model) {
        super(model);
        this._model = model
        this.repo = new TTypeRepository(sequelize, 'ttype')
    }

}


module.exports = TTypeController