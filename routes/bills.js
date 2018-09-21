var express = require('express');
var router = express.Router({ mergeParams: true});
const { Shoesie } = require('../db/schema')

//Show all
router.get('/', (req, res) => {
    Shoesie.findById(req.params.shoesieId)
    .then((shoesie) => {
        shoesie.billsTotal = shoesie.bills.rent + shoesie.bills.carInsurance + shoesie.bills.power + shoesie.bills.cc + shoesie.bills.other
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
// Edit Bills Form
router.get('/edit', (req, res) => {
    Shoesie.findById(req.params.shoesieId)
      .then((shoesie) => {
        res.render('bills/edit', { 
        shoesie,
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
    Shoesie.findById(req.params.shoesieId)
      .then((shoesie) => {
        shoesie.bills = req.body
        return shoesie.save() 
      })
      .then((shoesie) => {
         res.redirect(`/shoesies/${req.params.shoesieId}/bills`) 
      })
  })   



module.exports = router;