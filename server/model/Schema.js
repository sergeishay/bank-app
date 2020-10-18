const mongoose = require("mongoose")

const transactionSchema  = new mongoose.Schema({
    amount: Number,
    category : String,
    vendor:String
})

const Transaction = mongoose.model("Transaction" , transactionSchema )

module.exports = Transaction;