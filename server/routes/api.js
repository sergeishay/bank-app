const express = require("express")
const router = express.Router();
const Transaction = require("../model/Schema")

router.get("/transactions", function (req, res) {
    Transaction.find({}).then(t => {
        res.send(t)
    })
})
router.get("/categories", function (req, res) {
    Transaction.aggregate([{
        $group :{
            _id : "$category",
            total:{
                $sum : "$amount"
            }
        }
    }]).then(categories => res.send(categories))
})
router.get("/single/:name", function (req, res) {
    let name = req.params.name
    Transaction.find({ category :name })
    .then(single => res.send(single))
})


router.post("/transaction", function (req, res) {
    let transaction = new Transaction(req.body)
    transaction.save().then(t => {
        res.send(t)
    })
})

router.delete("/transaction", function (req, res) {
    let { transactionId } = req.body
    Transaction.findByIdAndDelete( transactionId , function () {
        res.end()
    });
});

module.exports = router