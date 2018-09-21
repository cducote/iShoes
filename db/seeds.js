require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })

const Schema = require('./schema')

const { Shoesie, Bills, Income } = Schema

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