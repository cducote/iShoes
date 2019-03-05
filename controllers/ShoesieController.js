const Shoesie = require('../models/Shoesie')

const shoesieController = {
  index: (req, res) => {
    Shoesie.find()
    .then(shops => {
      res.render('shops/index', {shoesies})
    })
  }
}