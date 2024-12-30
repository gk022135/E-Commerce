import React from "react";
import './Productimage.css'
function Productimage(props){

    return(
        <div className="Produt-Image">
            <img src={props.image}></img>
        </div>
    );
};
export default Productimage;