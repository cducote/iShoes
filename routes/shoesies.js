var express = require('express');
var router = express.Router({ mergeParams: true});

const { Shoesie } = require('../db/schema')


// New Shoesie
router.get('/new', function(req, res){
	res.render("shoesies/new.hbs");
});
// Show all Shoesies
router.get('/', (req, res) => {
  Shoesie.find()
    .then((shoesies) => {
      res.render('shoesies/index', { shoesies })
    })
})
// // Show One Shoesie
router.get('/:id', (req, res) => {
  Shoesie.findById(req.params.id)
    .then((shoesie) => {
      // figure net amount
      shoesie.net = parseInt(shoesie.incomeTotal - shoesie.billsTotal)
      // determine if user can afford shoes or not
      if (shoesie.net >= 100) {
        shoesie.affordShoes = true
      } else {
        shoesie.affordShoes = false
      }
      return shoesie.save()
    })
    .then((shoesie) => {
      res.render('shoesies/show', { shoesie })
    })
})
// Show One Redirect
router.post('/', (req, res) => {
    Shoesie.create(req.body)
      .then((shoesie) => {
        res.redirect(`/shoesies/${shoesie._id}`)
      })
  })
// Edit, Render Edit Form
router.get('/:id/edit', (req, res) => {
  Shoesie.findById(req.params.id)
    .then((shoesie) => {
      res.render('shoesies/edit', { shoesie })
    })
  })
// Shoe cost form
router.get('/:id/shoecost', (req, res) => {
  Shoesie.findById(req.params.id)
    .then((shoesie) => {
      res.render('shoesies/edit', { shoesie })
    })
  })
// Update
router.put('/:id', (req, res) => {
  Shoesie.findByIdAndUpdate(req.params.id, req.body)
    .then((shoesie) => {
      res.redirect(`/shoesies/${shoesie._id}`)
    })
})     
// Delete
router.delete('/:id', (req, res) => {
  Shoesie.findByIdAndRemove(req.params.id)
    .then(() => {
      res.redirect('/shoesies')
    })
})

module.exports = router;
