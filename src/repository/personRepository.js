'use strict';

const PostgreRepository = require("./repository")
const models = require('../models/init-models')
const sequelize = require('../config/database');
models(sequelize)

/**
 * Person repository currently has no special functions
 */
class PersonRepository extends PostgreRepository {

    async findAllWithModels() {
        try {
            return await this.collection.findAll({
                raw: true,
                attributes:["person_pk", "name", "lastname", "mobile", "email", "pposition", "dob"],
                include: [{
                    model: models(sequelize).City,
                    as: 'cob_city',
                    attributes: ['city']
                },
                {
                    model: models(sequelize).Facility,
                    as: 'facility_facility',
                    attributes: ['name']
                }
                ]
            }).then(data => {
                return data;
            });
        } catch (err) {
            return await err;
        }
    }

}

module.exports = PersonRepository;