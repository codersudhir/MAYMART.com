import React from "react"
import Images from "./Images"

class Cart extends React.Component{
    render(){
        return (
        <div className="container" style={{"display": "flex","justify-content": "center","flex-direction": "column","align-items": "center"}}>
        <img src={Images.add_to_cart} style={{"width": "225px","height": "165px"}}alt=""/>
        <h3>Your Cart is empty!</h3>
        <p>You have no items added in cart</p>
        <button className="btn btn-primary mt-3">Add Products</button>
    </div>
        )
    }
}

export default Cart