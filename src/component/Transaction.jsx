import React, { Component } from 'react';
import remove from '../images/quit.svg'
export class Transction extends Component {
    constructor() {
        super()
    }
    deleteTransaction = () => {
        let toDelete = this.props.transaction._id
        this.props.deleteTransaction(toDelete)
    }

    render() {
        const key =this.props.keys
        const transaction = this.props.transaction
        return (
            <div>
                <div className="transctionDisplay">
                    <div className="transactionHolder">
                        {
                            <table>
                                <tbody>
                                    <tr>
                                        <td key={transaction.category + key} className="category">{transaction.category}</td>
                                        <td key={transaction.amount + key} className={transaction.amount < 0 ?  "red" : "green"}>{transaction.amount}</td>
                                        <td key={transaction.vendor + key} className="vendor">{transaction.vendor}</td>
                                        <img name="toDelete" onClick={this.deleteTransaction} className="removeBtn" width="15px" height="15px" src={remove} alt=""/>
                                    </tr>
                                </tbody>
                            </table>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Transction;
