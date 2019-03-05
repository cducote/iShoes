const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BillsSchema = new Schema({
  rent: Number,
  carInsurance: Number,
  power: Number,
  cc: Number,
  other: Number
}) 

module.exports = mongoose.model("Bills", BillsSchema)