'use strict';

const PostgreRepository = require("./repository");

/**
 * Location Repository has two additional functions
 *  - findAllByCity - returning Promise array<Location> where City has city_pk
 *  - findAllByName - returning Promise array<Location> where Location.Name like Name
 */
class LocationRepository extends PostgreRepository {

    /**
     * Find all cities where country_pk = country_pk
     * @param city_pk
     * @returns {Promise<*>}
     */
    async findAllByCity (city_pk) {
        try {
            return await this.collection.findAll({
                raw: true,
                where: {
                    city: city_pk
                }
            }).then(data => {
                return data;
            });
        } catch (err){
            return await err;
        }
    }

    // TODO - async findAllByName function

}
module.exports = LocationRepository;