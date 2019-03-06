const Shoesie = require('../models/Shoesie')
const Bills = require('../models/Bills')
const Income = require('../models/Income')

const shoesieController = {
  index: (req, res) => {
    Shoesie.find()
    .then(shoesies => {
      res.render('shoesies/index', {shoesies})
    })
  }
}

module.exports = shoosieController