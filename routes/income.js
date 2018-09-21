var express = require('express');
var router = express.Router({ mergeParams: true});
const { Shoesie } = require('../db/schema')

// Show all
router.get('/', (req, res) => {
    Shoesie.findById(req.params.shoesieId)
    .then((shoesie) => {
        shoesie.incomeTotal = shoesie.income.primaryIncome + shoesie.income.otherIncome
        return shoesie.save() 
        })
    .then((shoesie) => {
        res.render('income/index', {
            shoesie,
            shoesieId: req.params.shoesieId,
            income: shoesie.income  
        })
    })
    .catch(error => {
        console.log(error)
    })
})
// Edit Income Form
router.get('/edit', (req, res) => {
    Shoesie.findById(req.params.shoesieId)
        .then((shoesie) => {
            res.render('income/edit', {
            shoesie,
            shoesieId: req.params.shoesieId,
            bills: shoesie.bills    
            })
        })
        .catch(error => {
            console.log(error)
        })
})
// Update incomesies
router.put('/', (req, res) => {
    Shoesie.findById(req.params.shoesieId)
    .then((shoesie) => {
        shoesie.income = req.body
        return shoesie.save()
    })
    .then((shoesie) => {
        // console.log(shoesie.income.primaryIncome)
        res.redirect(`/shoesies/${req.params.shoesieId}/income`)
    })
})



module.exports = router;