import React from "react";
import Card from "./Card";
import './Productmain.css';

function Productmain() {
    const ProductDetail = [
        {
            name: "Samosa",
            price: 10.00,
            image: "product-image/Samosa-image.jpeg",
            expiry: "best-before 5hr",
            stars: "****",
            reviews : 102634,
        },
        {
            name: "Breadpakoda",
            price: 10.00,
            image :"product-image/Bread-pakora.jpeg",
            expiry: "best-before 15hr",
            stars: "***",
            reviews : 1634,
        },
        {
            name: "Gulab Jammun",
            price: 15.00,
            image :"product-image/Gulab-jamun.jpeg",
            expiry: "best-before 5hr",
            stars: "****",
            reviews : 102634,
        },
        {
            name: "Barfi",
            price: 30.00,
            image :"product-image/Barfi.jpeg",
            expiry: "1-week",
            stars: "*****",
            reviews : 35463,
        },
        {
            name: "Baisan Laddu",
            price: 15.00,
            image :"product-image/Baisan-Laddu.jpeg",
            expiry: "best-before 5hr",
            stars: "****",
            reviews : 102634,
        },
        {
            name: "Jalebi",
            price: 10.00,
            image :"product-image/Jalebi.jpeg",
            expiry: "best-before 5hr",
            stars: "****",
            reviews : 102634,
        },
        {
            name: "Kaju-Katli",
            price: 10.00,
            image :"product-image/Kaju-katli.jpeg",
            expiry: "best-before 5hr",
            stars: "****",
            reviews : 102634,
        },
        {
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
           
            <Card items = {ProductDetail}/>
            
        </div>
    );
};

export default Productmain;