'use strict';

const PostgreRepository = require('../repository/repository');
const sequelize = require('../config/database');
const models = require('../models/init-models')

models(sequelize);

class Controller {
    constructor(model) {
        this._model = model;
        this.add = this.add.bind(this);
        this.findAll = this.findAll.bind(this);
        this.findOne = this.findOne.bind(this);
        this.update = this.update.bind(this);
        this.remove = this.remove.bind(this);
        this.repo = new PostgreRepository(sequelize, this._model)
    }

    add(req, res) {
        console.log(req.originalUrl);
        this.repo.add(req.body).then(data =>{
            let val = Object.keys(data)
            res.render('pages/index', {oneData:data, val:val})
        }, err => res.status(400).send(err))
    }

    findAll(req, res) {
        this.repo.findAll().then(data => {
            try {
                let val = Object.keys(data[0])
                // console.log(val)

                res.render('pages/index', {data: data, val: val})
            } catch (err) {
                res.status(400).send(err)
            }
        }, err => res.status(400).send(err))
    }

    findOne(req, res) {
        this.repo.findOne(req.params.id).then(data => {
            let val = Object.keys(data[0])
            res.render('pages/index', {data:data, val:val})
        }, err => res.status(400).send(err))
    }

    update(req, res) {
        this.repo.update(req.body, req.params.id).then(data => {
            // res.send(data)
            let val = Object.keys(data[0])
            res.render('pages/index', {data:data, val:val})
        }, err => res.status(400).send(err))
    }

    remove(req, res) {
        console.log(req.params.id);
        this.repo.remove(req.params.id).then(data => {
            // res.send(data)
            let val = Object.keys(data[0])
            res.render('pages/index', {data:data, val:val})
        }, err => res.status(400).send(err))
    }
}

module.exports = Controller

