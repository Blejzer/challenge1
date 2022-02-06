'use strict';

const PostgreRepository = require("./repository");
const {Op} = require("sequelize");

/**
 * Country repository currently has no special functions
 */
class CitizenshipRepository extends PostgreRepository {

    async findAllByPerson(person) {
        try {
            return await this.collection.findAll({
                where: {
                    person_pk: person
                },
                include: ['person_pk_person'],
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

module.exports = CitizenshipRepository;