import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import car from '../images/car.png'
import food from '../images/food.png'
import hangout from '../images/hangout.png'
import apartment from '../images/apartment.png'
import shopping from '../images/shopping.png'
import other from '../images/other.png'
export class Category extends Component {
    constructor() {
        super()
        this.state = {
            images: { car, food, hangout, apartment, shopping, other }
        }
    }
    render() {
        const images = this.state.images
        const category = this.props.categories

        return (
         
          <div className="singleCategory">
                    <div className="divCategoty">
                        <img className="imgCategory" width="100px" height="100px" src={images[category._id]} alt="" />
                        <h4 className="catDisign">{category._id}</h4>
                        <h4 className="catDisign">{-1*category.total}</h4>
                    </div>
            </div>
        )
    }
}

export default Category;
