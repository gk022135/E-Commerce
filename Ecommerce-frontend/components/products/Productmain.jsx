import React from "react";
import Card from "./Card";
import './Productmain.css';
import CardMap from "./CardMapFunction";

function Productmain() {
    const ProductDetail = [
        {
            id:"xxxx1",
            name: "Samosa",
            price: 10.00,
            image: "product-image/Samosa-image.jpeg",
            expiry: "best-before 5hr",
            stars: "****",
            reviews : 102634,
        },
        {
            id:"xxxx2",
            name: "Breadpakoda",
            price: 10.00,
            image :"product-image/Bread-pakora.jpeg",
            expiry: "best-before 15hr",
            stars: "***",
            reviews : 1634,
        },
        {
            id:"xxxx3",
            name: "Gulab Jammun",
            price: 15.00,
            image :"product-image/Gulab-jamun.jpeg",
            expiry: "best-before 5hr",
            stars: "****",
            reviews : 102634,
        },
        {
            id:"xxxx4",
            name: "Barfi",
            price: 30.00,
            image :"product-image/Barfi.jpeg",
            expiry: "1-week",
            stars: "*****",
            reviews : 35463,
        },
        {
            id:"xxxx5",
            name: "Baisan Laddu",
            price: 15.00,
            image :"product-image/Baisan-Laddu.jpeg",
            expiry: "best-before 5hr",
            stars: "****",
            reviews : 102634,
        },
        {
            id:"xxxx6",
            name: "Jalebi",
            price: 10.00,
            image :"product-image/Jalebi.jpeg",
            expiry: "best-before 5hr",
            stars: "****",
            reviews : 102634,
        },
        {
            id:"xxxx7",
            name: "Kaju-Katli",
            price: 10.00,
            image :"product-image/Kaju-katli.jpeg",
            expiry: "best-before 5hr",
            stars: "****",
            reviews : 102634,
        },
        {
            id:"xxxx8",
            name: "Gulab Jammun",
            price: 15.00,
            image :"product-image/Gulab-jamun.jpeg",
            expiry: "best-before 5hr",
            stars: "****",
            reviews : 102634,
        }
    ]

    return (
        <div className="Productmain">
           
            {/* <Card items = {ProductDetail}/> */}
            <CardMap items = {ProductDetail} />
            
        </div>
    );
};

export default Productmain;