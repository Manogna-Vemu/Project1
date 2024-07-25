import React from 'react';
import Eleven from './Eleven';
import ProductSpecification from './ProductSecification';
import Twelve from './Twelve';
import './Assignment2.css'; 

const SingleProduct = () => {
    return (
        <div className="product-main-content">
            <div className="layout section">
                <div className="single-product-page">
                    <div className="product-image-display">
                        <img src="/product.jpg" alt="Product" className="product-image" />
                    </div>
                    <div className="product-details">
                        <span className="name">Product Name</span>
                        <span className="price">Cost</span>
                        <span className="desc">
                            Description description description description description description<br/>
                            Description description description description description description
                        </span>
                        <Eleven />
                    </div>
                </div>
            </div>
            <div className="layout section pro-speci">
                <ProductSpecification />
            </div>
            <div className="layout section review">
                <Twelve />
            </div>
        </div>
    );
};

export default SingleProduct;


/*import React from 'react';
import { useEffect, useState } from "react";
import Eleven from './Eleven';
import ProductSpecification from './ProductSecification';
import Twelve from './Twelve';
import './Assignment2.css'; 

const SingleProduct = () => {
    return (
        <div className="product-main-content">
            <div className="layout">
                <div className="single-product-page">
                    <div className="product-image-display">
                        <img src="/product.jpg" alt="Product" className="product-image" />
                    </div>
                    <div className="product-details">
                        <span className="name">product name</span>
                        <span className="price">Cost</span>
                        <span className="desc">description description description description description description<br/>
                        description description description description description description</span>
                        <Eleven/>
                    </div>
                </div>
            </div><br/>
                <div className='pro-speci'> <ProductSpecification/></div>
                <div className='review'><Twelve/></div>
        </div>
    );
};



export default SingleProduct;*/