'use strict';

const Controller = require('./mainController')

class CountryController extends Controller {
    constructor(model) {
        super(model);
    }
}

module.exports = CountryController