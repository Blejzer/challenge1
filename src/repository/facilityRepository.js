'use strict';

const PostgreRepository = require("./repository");
const models = require("../models/init-models");
const sequelize = require("../config/database");
const {Op} = require("sequelize");

/**
 * Facility Repository has two additional functions
 *
 */
class FacilityRepository extends PostgreRepository {

    async findAllByCity (city_pk) {
        try {
            return await this.collection.findAll({
                raw: true,
                where: {
                    city: city_pk
                },
                // include: ['city_city']
            }).then(data => {
                return data;
            });
        } catch (err) {
            return await err;
        }
    }

}
module.exports = FacilityRepository;