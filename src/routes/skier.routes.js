const express = require('express');
const skierController = require('../controllers/skier.controller');

const router = express.Router();

router
    .route('/')
    .post(skierController.newSkier)
    .get(skierController.getSkiers);


router
    .route('/withresort')
    .post(skierController.newSkierWResort)
    .get(skierController.getSkiersWithResorts)

router
    .route('/:id')
    .get(skierController.getSkierByPk)
    .delete(skierController.removeSkierByPk)
    .put(skierController.renameSkierByPk);

router
    .route('/:id/resorts')
    .get(skierController.getSkierByPkWithResorts)
    .post(skierController.addResortToSkierByPk)
    .delete(skierController.removeResortFromSkierByPk);




module.exports = router;
