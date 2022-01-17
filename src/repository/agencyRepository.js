'use strict';

const PostgreRepository = require("./repository");

/**
 * Location Repository has two additional functions
 *  - findAllByCity - returning Promise array<Location> where City has city_pk
 */
class AgencyRepository extends PostgreRepository {

/* TODO
    async findAllByCountry(id) {
        try {
            return await this.collection.findByPk(id,{
                include: ['city_city'],
                raw: true
            }).then(data => {
                return data;
            });
        } catch (err){
            return await err;
        }
    }
 */
}
module.exports = AgencyRepository;