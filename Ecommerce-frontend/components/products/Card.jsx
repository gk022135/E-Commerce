import React from "react";
import ProductDetails from "./ProdutDetails";
import Productimage from "./Productimage";
import './Card.css';

function Card(props) {


    return (
        <div className="Card-grid">
            <div className="Card">
                <Productimage image={props.items[0].image} />
                <ProductDetails name={props.items[0].name} price={props.items[0].price} expiry={props.items[0].expiry}
                    stars={props.items[0].stars} reviews={props.items[0].reviews} />
            </div>


            <div className="Card">
                <Productimage image={props.items[1].image} />
                <ProductDetails name={props.items[1].name} price={props.items[1].price} expiry={props.items[1].expiry}
                    stars={props.items[1].stars} reviews={props.items[0].reviews} />
            </div>
            <div className="Card">
                <Productimage image={props.items[2].image} />
                <ProductDetails name={props.items[2].name} price={props.items[2].price} expiry={props.items[2].expiry}
                    stars={props.items[2].stars} reviews={props.items[2].reviews} />
            </div>
            <div className="Card">
                <Productimage image={props.items[3].image} />
                <ProductDetails name={props.items[3].name} price={props.items[3].price} expiry={props.items[3].expiry}
                    stars={props.items[3].stars} reviews={props.items[3].reviews} />
            </div>
            <div className="Card">
                <Productimage image={props.items[4].image} />
                <ProductDetails name={props.items[4].name} price={props.items[4].price} expiry={props.items[4].expiry}
                    stars={props.items[4].stars} reviews={props.items[4].reviews} />
            </div>
            <div className="Card">
                <Productimage image={props.items[5].image} />
                <ProductDetails name={props.items[5].name} price={props.items[5].price} expiry={props.items[5].expiry}
                    stars={props.items[5].stars} reviews={props.items[5].reviews} />
            </div>
            <div className="Card">
                <Productimage image={props.items[6].image} />
                <ProductDetails name={props.items[6].name} price={props.items[6].price} expiry={props.items[6].expiry}
                    stars={props.items[6].stars} reviews={props.items[6].reviews} />
            </div>
            <div className="Card">
                <Productimage image={props.items[7].image} />
                <ProductDetails name={props.items[7].name} price={props.items[7].price} expiry={props.items[7].expiry}
                    stars={props.items[7].stars} reviews={props.items[7].reviews} />
            </div>
            
        </div>
    );
};

export default Card;