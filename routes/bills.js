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




module.exports = router;