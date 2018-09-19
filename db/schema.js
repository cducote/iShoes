const mongoose = require('mongoose')
const Schema = mongoose.Schema

const IncomeSchema = new Schema({
    income = Number,
    otherIncome = Number
})

const BillsSchema = new Schema({
    rent = Number,
    carInsurance = Number,
    power = Number,
    cc = Number,
    other = Number
}) 

const ShoesieSchema = new Schema({
    username = String,
    bills = [BillsSchema],
    income = [IncomeSchema],
    billsTotal = number,
    incomeTotal = number
    affordShoes = Boolean
})

const IncomeSchema = mongoose.model('Income', IncomeSchema)
const BillsSchema = mongoose.model('Bills', BillsSchema)
const ShoesieSchema = mongoose.model('User', ShoesieSchema)

module.exports = {
    Income: IncomeModel,
    Bills: BillModel,
    Shoesie: ShoesieModel
}