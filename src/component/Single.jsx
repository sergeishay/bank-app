import React, { Component } from 'react';
import Axios from 'axios';

export class Single extends Component {

  state = {
    data: []
  }

  componentDidMount = async () => {
    const from = this.props.match.params.name
    let singleCategory = await Axios.get(`http://localhost:3003/single/${from}`)
    this.setState({ data: singleCategory.data })
  }

  render() {
    let name = this.props.match.params.name
    return (
      <div className="single">
        <h1>{name}</h1>
        {this.state.data.map(s => {
          return (
            <table className="singleTable">
              <tbody>
                <tr >
                  <td >{s.amount}</td>
                  <td >{s.vendor}</td>
                </tr>
              </tbody>
            </table>
          )

        })}
      </div>
    )
  }
}

export default Single;