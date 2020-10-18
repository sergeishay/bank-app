import React, { Component } from 'react';
import Transaction from './Transaction'
import Operation from './Operation';


export class Transactions extends Component {
    constructor() {
        super()

        this.state = {
            amount: "",
            vendor: "",
            category: ""
        }
    }

    update = (evt) => {
        const value = evt.target.value;
        this.setState({
            ...this.state,
            [evt.target.name]: value
        });
    }

    addTransaction = (e) => {
        let event = e.target.name
        let state = { ...this.state }
        state.amount = parseInt(state.amount)
        event === "Withdraw" ? state.amount = -1 * state.amount : state.amount = state.amount;
        this.props.addTransaction(state)
    }

    render() {
        const transactions = this.props.state.data

        return (

            <div className="allTransction">
                <div className="inputForm">
                    <div className="inputHolder">
                        <label htmlFor="">Amount</label><input key="Amount" name="amount" value={this.state.amount} onChange={this.update} />
                        <label htmlFor="">Vendor</label><input key="Vendor" name="vendor" value={this.state.vendor} onChange={this.update} />
                        <label htmlFor="">Category</label>
                        <select key="Category" className="selector" name="category" value={this.state.category} onChange={this.update}>
                            <option value="apartment">apartment</option>
                            <option value="car">car</option>
                            <option value="food">food</option>
                            <option value="hangout">hangout</option>
                            <option value="shopping">shopping</option>
                            <option value="other">other</option>
                        </select>
                    </div>
                    <div className="btn">
                        <button name="Withdraw" id="Withdraw" onClick={this.addTransaction}>Withdraw</button>
                        <button name="Deposit" id="Deposit" onClick={this.addTransaction}>Deposit</button>
                    </div>
                </div>
                <div className="categoryHolder">
                    <table>
                        <thead>
                            <tr>
                                <th key="categoryTitle" className="category">Category</th>
                                <th key="AmoutTitle" className="amount">Amount</th>
                                <th key="vendorTitle" className="vendor">Vendor</th>
                                <th key="vendorTitle" className="vendor">Delete</th>
                            </tr>
                        </thead>
                    </table>
                </div>
                {transactions.map((t, i) => {
                    return (
                        <div>
                            <Transaction keys={i} transaction={t} deleteTransaction={this.props.deleteTransaction} />
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Transactions;