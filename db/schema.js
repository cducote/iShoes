const mongoose = require('mongoose')
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

const IncomeSchema = new Schema({
    primaryIncome: Number,
    otherIncome: Number
})

const BillsSchema = new Schema({
    rent: Number,
    carInsurance: Number,
    power: Number,
    cc: Number,
    other: Number
}) 

const ShoesieSchema = new Schema({
    shoesieName: String,
    bills: {
        type: BillsSchema,
        default: defaultBills
    },
    income: {
        type: IncomeSchema,
        default: defaultIncome
    },
    net: { type: Number, default: 0 },
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