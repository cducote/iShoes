const mongoose = require('mongoose')
const Schema = mongoose.Schema

const IncomeSchema = new Schema({
  primaryIncome: Number,
  otherIncome: Number
})

module.exports = mongoose.model('Income', IncomeSchema)