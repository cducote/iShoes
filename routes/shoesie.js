var express = require('express');
var router = express.Router();

const { Shoesie } = require('../db/schema')

// Show my new Shoesie page
router.post('/', (req, res) => {
    Shoesie.create(req.body)
      .then((shoesie) => {
        res.redirect(`/shoesie/${shoesie._id}`)
      })
  })
// Show
router.get('/:id', (req, res) => {
    Shoesie.findById(req.params.id)
      .then((shoesie) => {
        res.render('shoesie/show', { shoesie })
      })
  })
// Edit, Render Edit Form

// Create

// Update
   
// Delete


module.exports = router;
