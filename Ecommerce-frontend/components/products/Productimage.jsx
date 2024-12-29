import React from "react";
import './Productimage.css'
function Productimage(props){

    return(
        <div className="Product-Image">
            <img className="img-pro" src={props.image}></img>
        </div>
    );
};
export default Productimage;