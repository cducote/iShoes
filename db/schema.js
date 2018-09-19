const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    username = String,
    bills = [],
    income = [],
    billsTotal = number,
    incomeTotal = number
    affordShoes = Boolean
})

