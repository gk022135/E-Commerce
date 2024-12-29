import React from "react";
import './ProdutDetails.css';

function ProductDetails(props){

    return(
        <div className="Details">
            <p>spicy Samosa with stuffing of potatoes and peanuts</p>
            <p className="rating"><b>{props.stars}</b>  ({props.reviews})</p>

            <h3>{props.name}</h3>
            <h3>{props.price}.00 per pices</h3>
            <h3>{props.expiry}</h3>
            <div className="Cart">
                <button className="add">Add cart</button>
                <button className="buy">Buy</button>
            </div>

        </div>
    );
};
export default ProductDetails;