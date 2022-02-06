'use strict';

const PostgreRepository = require("./repository");
const models = require("../models/init-models");
const sequelize = require("../config/database");

/**
 * PersonType Repository has two additional functions
 *
 */
class PersonTypeRepository extends PostgreRepository {

}
module.exports = PersonTypeRepository;