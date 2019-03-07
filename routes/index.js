const express = require('express');
const router = express.Router();
const appController = require('../controllers/appController')
const shoesieController = require('../controllers/ShoesieController')

router.get('/', appController.index)
router.get('/shoesies', shoesieController.index)

module.exports = router
