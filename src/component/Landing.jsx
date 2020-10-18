import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Doughnut, HorizontalBar } from 'react-chartjs-2'
import './Landing.css'

export class Landing extends Component {
    constructor() {
        super()
        this.state = {
            positiveBalance : 0,
            negativeBalance : 0
        }
      }

    render() {
        const categories = this.props.state.categories
        const unicCategoryDeposit = [...new Set(categories.filter(c => { return (c.total < 0 ? c.total : null) }).map(c => c._id))]
        const unicCategoryAmount = [...new Set(categories.filter(c => { return (c.total < 0 ? c.total : null) }).map(c => c.total))]

        const negativeSum = this.props.state.data
        .map((a) => { return a.amount < 0 ? a.amount :null })
        .reduce((result, item)=>{ return this.state.negativeBalance =+ result+item },0)

        const positiveSum = this.props.state.data
        .map((a) => { return a.amount > 0 ? a.amount :null })
        .reduce((result, item)=>{ return this.state.positiveBalance =+ result+item },0)

        const data = {
            labels: unicCategoryDeposit,
            hieght: "75",
            width: "75",
            datasets: [
                {
                    label: 'Rainfall',
                    width: "60",
                    height: "60",
                    backgroundColor: [ '#d92027','#ff9234','#ffcd3c','#35d0ba','#35d0da','#35d0w3','#35d0ba','#f6f4e6'],
                    hoverBackgroundColor: ['#501800','#4B5000', '#175000','#003350','#35014F'],
                    data: unicCategoryAmount,
                }
            ]
        }

        const barData = {
            type: "horizontalBar",
            labels: ["Expenses", "Deposits"],
            hieght: "40",
            width: "40",
            datasets: [
                {
                    backgroundColor: ['#d92027', '#ff9234'],
                    hoverBackgroundColor: ['#501800','#4B5000'],
                    data: [-1*negativeSum, positiveSum]
                }
            ]
        }
        return (
            <div className="landingPage">
                <h1 className="h1Lan">Welcome</h1>
                <h2>Your balance : {this.props.balance}</h2>
                <Doughnut
                    data={data}
                    height="20%"
                    width= "50%"
                    options={{
                        title: {
                            display: false,
                            text: 'Expences',
                            fontSize: 20
                        },
                        legend: {
                            display: true,
                            position: "top",
                            fontSize: 30,
                            align: "center",
                        },

                        responsive: true,
                        maintainAspectRatio: true,
                        animation: {
                            animateScale: true,
                            animationRotate: true,
                            duration: 1000
                        },
                        cutoutPercentage: 50,
                        circumference: 2 * Math.PI,
                        showAllTooltips: true,
                        tooltips: {
                            enabled: true
                        },
                    }
                    }

                />

                <div className="buttonToTransaction">
                    <Link key="transactions" to="/transactions">
                        <button className="btnLink">new Transaction</button>
                    </Link>
                </div>
                <div className="chartBar">
                    <HorizontalBar
                        data={barData}
                        options={{
                            legend: {
                                display: false,
                                position: "top",
                                fontSize: 30,
                                align: "center",
                            },
                            responsive: true,
                            maintainAspectRatio: true,
                            animation: {
                                animateScale: true,
                                animationRotate: true,
                                duration: 1000
                            },
                            scales: {
                                xAxes: [{
                                    stacked:false
                                }],
                                yAxes: [{
                                    stacked: false
                                }]
                            },

                            showAllTooltips: true,
                            tooltips: {
                                enabled: true
                            },
                        }
                        }

                    />
                </div>
            </div>
        )
    }
}

export default Landing;