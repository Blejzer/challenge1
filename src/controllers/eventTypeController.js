'use strict';

const Controller = require('./mainController')
const sequelize = require("../config/database");
const EventTypeRepository = require("../repository/eventTypeRepository");

class EventTypeController extends Controller {
    constructor(model) {
        super(model);
        this.newEt = this.newEt.bind(this);
        this.repo = new EventTypeRepository(sequelize, 'eventtype')
    }

    newEt(req, res) {
        res.render('pages/newEt')
    }
}

module.exports = EventTypeController