import { useEffect, useState } from "react"
import "./Assignment3.css";
function ProductsDisplay(){
    const [data,setData]=useState([]);
    useEffect(()=>{
        const fetchMyData=async()=>{
            const response=await fetch('https://fakestoreapi.com/products');
            const resData=await response.json();
            setData(resData);
            console.log(data);
        }
        fetchMyData();
    });
    return(
        <div>
            <div className="products-container">
            {data.map(product => (
            <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} className="product-image" />
            <h2 className="product-title">{product.title}</h2>
            <p className="product-price">${product.price}</p>
            <p className="product-description">{product.description}</p>
            <button className="add-to-cart-button">Add to Cart</button>
        </div>
      ))}
    </div>
        </div>
    );
}
export default ProductsDisplay;