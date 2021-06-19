const express = require('express');
const resortController = require('../controllers/resort.controller');

const router = express.Router();

router
    .route('/')
    .post(resortController.newResort)
    .get(resortController.getResorts);

router
    .route('/:id')
    .get(resortController.getResortByPk)
    .delete(resortController.removeResortByPk)
    .put(resortController.updateResortName);

router
    .route('/:id/skiers')
    .get(resortController.getResortByPkWithSkiers);


module.exports = router;
