'use strict';

const Controller = require('./mainController')
const EventRepository = require("../repository/eventRepository")
const EventTypeRepository = require("../repository/eventTypeRepository")
const sequelize = require("../config/database")
const FacilityRepository = require("../repository/facilityRepository");

class EventController extends Controller {
    constructor(model) {
        super(model);
        this.getNewEvent = this.getNewEvent.bind(this);
        this.repo = new EventRepository(sequelize, this._model)
        this.et = new EventTypeRepository(sequelize, 'eventtype')
        this.facility = new FacilityRepository(sequelize, 'facility')
    }

    getNewEvent(req, res) {
        console.log(req.url)
        this.facility.findAll().then(fac => {
            this.et.findAll().then(et => {
                console.log(fac.length)
                console.log(et.length)
                res.render('pages/newEvent', {fac: fac, et: et})
            }, err => res.status(400).send(err))
        })
    }
}

module.exports = EventController