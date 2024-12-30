import React from "react";
import './Cart.css';
import count from '../pages/Home.jsx'

function Cart(props){


    return(
       <div className="Cart-Image"> 
         <div className="Cart-Count">
            <p>{props.xy}</p>
         </div>
         <img src="product-image/cart_10319450.png" alt="" />
       </div>
    );
};
export default Cart;