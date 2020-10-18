import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Category from "./Category"

export class Operation extends Component {
  constructor() {
    super()
  }
  render() {

    const categories = [...new Set(this.props.state.categories.filter(c => {return(c.total < 0 ? c :null)}).map(c => c))]
    return (


      <div className="categoryOperation">
        <div>{categories.map(c => {
          return (
              <Link to={`/operation/${c._id}`}><Category match={this.props.match} state={this.props.state} categories={c} /></Link>
          )
        })
        }</div>
      </div>
    )
  }
}

export default Operation;