'use strict';

const PostgreRepository = require("./repository");
const {Op} = require("sequelize");

/**
 * Person - TravelDoc repository currently has no special functions
 */
class PtdRepository extends PostgreRepository {

    async findAllByPerson(person) {
        try {
            return await this.collection.findAll({
                where: {
                    person_pk: person
                },
                include: ['p_pk_p'],
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

}

module.exports = PtdRepository;