const mongoose = require('mongoose')
const Shoesie = require('../models/Shoesie')

const chrisIncome = new Income({
    primaryIncome: 2000,
    otherIncome: 400
})

const chrisBills = new Bills({
    rent: 600,
    carInsurance: 120,
    power: 120,
    cc: 150,
    other: 45
})

const chris = new Shoesie({
    shoesieName: "Chris",
    bills: chrisBills,
    income: chrisIncome,
    net: 0,
    billsTotal: 0,
    incomeTotal: 0,
    affordShoes: true
})

Shoesie.deleteMany()
    .then(() => {
      console.log('INSERTING', chris)
      return Shoesie.insertMany([chris])
    })
    .then(() => {
        console.log('Done Seedering')
        mongoose.connection.close()
    })