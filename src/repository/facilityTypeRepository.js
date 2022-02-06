'use strict';

const PostgreRepository = require("./repository");
const models = require("../models/init-models");
const sequelize = require("../config/database");

/**
 * FacilityType Repository has two additional functions
 *
 */
class FacilityTypeRepository extends PostgreRepository {

}
module.exports = FacilityTypeRepository;