const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const defaultBills = {
  rent: 0,
  carInsurance: 0,
  power: 0,
  cc: 0,
  other: 0
}

const defaultIncome = {
  primaryIncome: 0,
  otherIncome: 0
}

const BillsSchema = new Schema({
  rent: Number,
  carInsurance: Number,
  power: Number,
  cc: Number,
  other: Number
}) 

const IncomeSchema = new Schema({
  primaryIncome: Number,
  otherIncome: Number
})

const ShoesieSchema = new Schema({
  shoesieName: String,
  bills: {
      type: BillsSchema,
      default: defaultBills,
      value: 0
  },
  income: {
      type: IncomeSchema,
      default: defaultIncome,
      value: 0
  },
  net: { type: Number, default: 0 },
  billsTotal: { type: Number, default: 0 },
  incomeTotal: { type: Number, default: 0 },
  shoeCost: { type: Number, default: 0 },
  affordShoes: { type: Boolean, default: 'no' }
})

module.exports = mongoose.model('Shoesie', ShoesieSchema)