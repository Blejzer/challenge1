'use strict';

const PostgreRepository = require("./repository");
const models = require("../models/init-models");
const sequelize = require("../config/database");

/**
 * TType Repository has two additional functions
 *
 */
class TTypeRepository extends PostgreRepository {

}
module.exports = TTypeRepository;