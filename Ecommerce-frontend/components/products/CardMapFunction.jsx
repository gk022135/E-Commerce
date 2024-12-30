import React from "react";
import ProductDetails from "./ProdutDetails";
import Productimage from "./Productimage";
import './Card.css';

function CardMap({ items }) {
  return (
    <div className="Card-grid">
      {items.map(({id, image, name, price, expiry, stars, reviews }, index) => (
        <div className="Card" key={index}>
          <Productimage image={image} />
          <ProductDetails
            id = {id}
            name={name}
            price={price}
            expiry={expiry}
            stars={stars}
            reviews={reviews}
          />
        </div>
      ))}
    </div>
  );
}

export default CardMap;
