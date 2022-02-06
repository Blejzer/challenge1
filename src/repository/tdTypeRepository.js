'use strict';

const PostgreRepository = require("./repository");
const models = require("../models/init-models");
const sequelize = require("../config/database");

/**
 * Travel Document Type Repository has two additional functions
 *
 */
class TDTypeRepository extends PostgreRepository {

}
module.exports = TDTypeRepository;