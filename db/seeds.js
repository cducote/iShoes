require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })

const Schema = require('./schema')

const { Shoesie, Bills, Income } = Schema

const chrisIncome = new Income({
    income: 2000,
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
    username: Chris,
    bills: [{}],
    income: [{}],
    billsTotal: 1035,
    incomeTotal: 2400,
    affordShoes: true
})

User.deleteMany()
    .then(() => {
      return Shoesie.insertMany([chris])
    })
    .then(() => {
        console.log('Done Seedering')
        mongoose.connection.close()
    })