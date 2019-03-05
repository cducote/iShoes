const express = require('express');
const router = express.Router();
// const shoesieController = require('../controllers/ShoesieController'
const appController = require('../controllers/appController')

router.get('/', appController.index)

module.exports = router
