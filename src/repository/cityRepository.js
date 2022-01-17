'use strict';

const PostgreRepository = require("./repository");

/**
 * City Repository has two additional functions
 *  - findOneWithCountry - returning Promise of City with Country included
 *  - findAllByCountry - returning Promise array<City> where Country has country_pk
 */
class CityRepository extends PostgreRepository {

    /**
     * Find One city By PK with Eager loading including country
     * @param id
     * @returns {Promise<City>}
     */
    async findOneWithCountry(id){
        try {
            return await this.collection.findByPk(id,{
                include: ['country_country'],
                raw: true
            }).then(data => {
                return data;
            });
        } catch (err){
            return await err;
        }
    }

    /**
     * Find One city by Name with Eager loading including country
     * @param city
     * @returns {Promise<*>}
     */
    async findOneByCity(city){
        try {
            return await this.collection.findOne({
                where: {
                    city: city
                },
                // include: ['country_country'],
                raw: true
            }).then(data => {
                if (data === null) {
                    console.log('Not found!');
                }
                return data;
            });
        } catch (err){
            return await err;
        }
    }

    /**
     * Find all cities where country_pk = country_pk
     * @param country_pk
     * @returns {Promise<*>}
     */
    async findAllByCountry (country_pk) {
        try {
            return await this.collection.findAll({
                raw: true,
                where: {
                    country: country_pk
                }
            }).then(data => {
                return data;
            });
        } catch (err){
            return await err;
        }
    }

}
module.exports = CityRepository;