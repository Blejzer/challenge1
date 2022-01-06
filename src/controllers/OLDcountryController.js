// const countryRepository = require('../repository/countryRepository');
// let OLDcountryController = {
//     addCountry: addCountry,
//     findCountries: findCountries,
//     findCountryById: findCountryById,
//     updateCountry: updateCountry,
//     deleteById: deleteById
// }
//
// function addCountry(req, res) {
//     let country = req.body;
//     console.log(country);
//     console.log(req);
//     countryRepository.create(country).
//     then((data) => {
//         res.send(data);
//     })
//         .catch((error) => {
//             console.log(error);
//             res.send(400, error);
//         });
// }
//
// function findCountryById(req, res) {
//     countryRepository.findById(req.params.id).
//     then((data) => {
//         res.send(data);
//     })
//         .catch((error) => {
//             console.log(error);
//         });
// }
//
// function deleteById(req, res) {
//     countryRepository.deleteById(req.params.id).
//     then((data) => {
//         res.status(200).json({
//             message: "Gig deleted successfully",
//             gig: data
//         })
//     })
//         .catch((error) => {
//             console.log(error);
//         });
// }
//
// function updateCountry(req, res) {
//     countryRepository.updateCountry(req.body, req.params.id).
//     then((data) => {
//         res.status(200).json({
//             message: "Gig updated successfully",
//             gig: data
//         })
//     })
//         .catch((error) => {
//             console.log(error);
//         });
// }
//
// function findCountries(req, res) {
//     countryRepository.findAll().
//     then((data) => {
//         res.send(data);
//     })
//         .catch((error) => {
//             console.log(error);
//         });
// }
//
// module.exports = OLDcountryController;