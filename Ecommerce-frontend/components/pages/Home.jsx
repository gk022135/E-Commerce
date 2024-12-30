import React, { useState } from "react";
import './Home.css';
import Cart from "./Cart";
import Productmain from "../products/Productmain";
import Test from "./Test";

export function Home(){
    const [count, setCount] = useState(0); 
    
    function CountHandle() {
        setCount((prevCount) => prevCount + 1); 
    }

    const datas = [
        {id : "123a",name : "Gaurav", age :24},
        {id : "123b",name : "Saaurav Kumar", age :24},
        {id : "123c",name : "Gaurav", age :24},
        {id : "123d",name : "Gaurav", age :24},
        {id : "123e",name : "Gaurav", age :24},
    ]
    

  

    return (
        <>
        <div className="Marquee-tag">
            <marquee >
               <img src="product-image/Laddu.jpeg"></img>

               <img src="product-image/Good-Day-Orange.jpeg"></img>

               <img src="product-image/Garlic.jpeg"></img>

               <img src="product-image/Spongue.jpeg"></img>

               <img src="product-image/Potatoes.jpeg"></img>

               <img src="product-image/eclare-chocolate.jpeg"></img>

               <img src="product-image/Dream-lite.jpeg"></img>
            </marquee>
        </div>
        <div>
            <h1>now you are at home page broo!!</h1>
            <button onClick={CountHandle}></button>
            <p>{count}</p>
            <Cart xy = {count}/>
        </div>
        <Test users = {datas}/>
        

        </>
    );
};

export default Home;