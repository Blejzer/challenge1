'use strict';

const Controller = require('./mainController')
const PersonRepository = require("../repository/personRepository");
const sequelize = require("../config/database");

class PersonController extends Controller {
    constructor(model) {
        super(model);
        this.findAllWithModels = this.findAllWithModels.bind(this);
        this.repo = new PersonRepository(sequelize, this._model)
    }

    findAllWithModels(req, res){
        console.log(req.url)
        this.repo.findAllWithModels().then(data => {
            // res.send(data)
            let val = Object.keys(data[0])
            for(let i = 0; i < val.length; i++){
                switch (val[i]) {
                    case 'person_pk':
                        val[i] = "ID"
                        break;
                    case 'lastname':
                        val[i] = "Last name"
                        break;
                    case 'pposition':
                        val[i] = "Position"
                        break;
                    case 'cob_city.city':
                        val[i] = "COB"
                        break;
                    case 'dob':
                        val[i] = "DOB"
                        break;
                    case 'facility_facility.name':
                        val[i] = 'Agency'
                        break;
                    default:
                }
            }

            res.render('pages/index', {data:data, val:val})
        }, err => res.status(400).send(err))
    }
}

module.exports = PersonController