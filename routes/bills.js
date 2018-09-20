var express = require('express');
var router = express.Router({ mergeParams: true});
const { Shoesie } = require('../db/schema')

//Show all
router.get('/', (req, res) => {
    Shoesie.findById(req.params.shoesieId)
    .then((shoesie) => {
        shoesie.billsTotal = shoesie.rent + shoesie.carInsurance + shoesie.power + shoesie.cc + shoesie.other
        res.render('bills/index', {
            shoesie,
            shoesieId: req.params.shoesieId,
            bills: shoesie.bills
        })
    })
    .catch(error => {
        console.log(error)
    })
})
// Edit Form
router.get('/edit', (req, res) => {
    Shoesie.findById(req.params.shoesieId)
      .then((shoesie) => {
        console.log(shoesie)
        res.render('bills/edit', { shoesie,
        shoesieId: req.params.shoesieId,
        bills: shoesie.bills
     })
    })
    .catch(error => {
        console.log(error)
    })
})
// Update billsies
router.put('/', (req, res) => {
    Shoesie.create(req.body)
      .then((shoesie) => {
        res.redirect(`/shoesies/${shoesie._id}/bills`)
      })
  })   



module.exports = router;