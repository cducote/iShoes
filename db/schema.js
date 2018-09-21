const mongoose = require('mongoose')
const Schema = mongoose.Schema

const IncomeSchema = new Schema({
    primaryIncome: Number,
    otherIncome: Number,
    totalIncome: Number,
})

const BillsSchema = new Schema({
    rent: Number,
    carInsurance: Number,
    power: Number,
    cc: Number,
    other: Number,
    totalBills: Number
}) 

const ShoesieSchema = new Schema({
    shoesieName: String,
    bills: BillsSchema,
    income: IncomeSchema,
    billsTotal: Number,
    incomeTotal: Number,
    affordShoes: Boolean
})

const IncomeModel = mongoose.model('Income', IncomeSchema)
const BillsModel = mongoose.model('Bills', BillsSchema)
const ShoesieModel = mongoose.model('Shoesie', ShoesieSchema)

module.exports = {
    Income: IncomeModel,
    Bills: BillsModel,
    Shoesie: ShoesieModel
}