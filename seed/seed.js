const sequelize = require('../src/config/database');
const index = require('../src/models/index');
const countries = require('./tbl_countries');
const hr = require('./hr');
const al = require('./al');
const ba = require('./ba');
const me = require('./me');
const mk = require('./mk');
const rs = require('./rs');
const xk = require('./xk');

try {
    index.testConnection().then(result => {
        console.log('testConnection OK: ' + result);
    });
} catch (error) {
    console.error('testConnection' + error);
}

const rolesInit = [
    {
        role_pk: 1,
        name: 'Admin'
    },
    {
        role_pk: 2,
        name: 'EventManager'
    },
    {
        role_pk: 3,
        name: 'EventCoordinator'
    }
];
const korisniksInit = [
    {
        name: 'Nikola',
        lastname: 'Kujaca',
        role_pk: '1'
    },
    {
        name: 'Marko',
        lastname: 'Polo',
        role_pk: '2'
    }
]

const seed = () => {

    return index.models.models(sequelize).Role.bulkCreate(rolesInit, {returning: false})
        .catch((error) => {
            console.log(error);
        })
        .then(() => {
            return index.models.models(sequelize).Korisnik.bulkCreate(korisniksInit, {returning: false})
                .catch((error) => {
                    console.log(error);
                })
                .then(() => {
                    return index.models.models(sequelize).Country.bulkCreate(countries.countries, {returning: false})
                        .catch((error) => {
                            console.log(error);
                        })
                })
                .then(() => {
                    return index.models.models(sequelize).City.bulkCreate(al.cities, {returning: false})
                        .catch((error) => {
                            console.log(error);
                        })
                })
                .then(() => {
                    return index.models.models(sequelize).City.bulkCreate(ba.cities, {returning: false})
                        .catch((error) => {
                            console.log(error);
                        })
                })
                .then(() => {
                    return index.models.models(sequelize).City.bulkCreate(hr.cities, {returning: false})
                        .catch((error) => {
                            console.log(error);
                        })
                })
                .then(() => {
                    return index.models.models(sequelize).City.bulkCreate(me.cities, {returning: false})
                        .catch((error) => {
                            console.log(error);
                        })
                })
                .then(() => {
                    return index.models.models(sequelize).City.bulkCreate(mk.cities, {returning: false})
                        .catch((error) => {
                            console.log(error);
                        })
                })
                .then(() => {
                    return index.models.models(sequelize).City.bulkCreate(rs.cities, {returning: false})
                        .catch((error) => {
                            console.log(error);
                        })
                })
                .then(() => {
                    return index.models.models(sequelize).City.bulkCreate(xk.cities, {returning: false})
                        .catch((error) => {
                            console.log(error);
                        })
                })
                .finally(() => {
                    index.models.models(sequelize).Korisnik.findAll({
                        include:
                            [
                                {
                                    model: index.models.models(sequelize).Role, as:'roles'
                                }
                            ]
                    })
                        .then((korisniks) => {
                            korisniks.forEach(korisnik => console.log(korisnik));
                        })
                });
        });
}

try{
    index.syncModels({force: true})
        .then(() =>{
            console.log('db synced successfully');
        })
        .then(() => {
            seed()
                .then(() => {
                    console.log('sync done');
                    process.exit();
                });
        });
}catch (err){
    console.error('seed' + err);
}


