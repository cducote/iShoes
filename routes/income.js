var express = require('express');
var router = express.Router({ mergeParams: true});
const { Shoesie } = require('../db/schema')

//Show all
router.get('/', (req, res) => {
    Shoesie.findById(req.params.shoesieId)
    .then((shoesie) => {
        shoesie.incomeTotal = shoesie.income.primaryIncome + shoesie.income.otherIncome
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




module.exports = router;