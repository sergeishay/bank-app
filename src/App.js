import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Transactions from './component/Transactions'
import Landing from './component/Landing'
import Operation from './component/Operation'
import Single from './component/Single'
import './App.css';
import axios from 'axios'
import Category from './component/Category';



export class App extends Component {
  constructor() {
    super()
    this.state = {
      data: [],
      totalBalance: 0,
      categories : []
    }
  }

  addTransaction = async (transaction) => {
    await axios.post( "http://localhost:3003/transaction" , transaction)
    this.componentDidMount()
  }

  deleteTransaction = async (deleteId) => {
    let data = [...this.state.data]
    data = data.filter(d => d._id === deleteId)
    await axios.delete("http://localhost:3003/transaction" ,{data : {transactionId : deleteId }})
    this.componentDidMount()
  }

  componentDidMount = async () =>{
    let data = await axios.get("http://localhost:3003/transactions")
    let categories = await axios.get("http://localhost:3003/categories")
    let state = {categories:categories.data , data: data.data}
    this.setState(state)
  }
  render() {
    
    let sum = this.state.data
      .map((a) => { return a.amount })
      .reduce((result, item)=>{ return this.state.totalBalance =+ result+item },0)
        

    return (
      <Router key="route">
        <div key="app-main" className="App">
          <div key="main-links" id="main-links">
            <Link key="home" to="/"> <span className="barBtn">Home</span></Link>
            <Link key="transactions" to="/transactions"><span className="barBtn">Transactions</span></Link>
            <Link key="operation" to="/operation"><span className="barBtn">Categories</span></Link>
          </div>


          <div className="main" key="paths">
            <Route exact path="/" render={(match) => <Landing match={match} balance={sum} state={this.state} />} />
            <Route exact path="/transactions" render={({ match }) => <Transactions match={match} addTransaction={this.addTransaction} deleteTransaction={this.deleteTransaction} state={this.state} />} />
            <Route exact path="/operation" render={({ match }) => <Operation match={match} state={this.state} />} />
            <Route exact path="/operation/:name" render={({ match }) => <Single match={match} state={this.state} />} />
          </div>
        </div>
      </Router>
    )
  }
}

export default App;