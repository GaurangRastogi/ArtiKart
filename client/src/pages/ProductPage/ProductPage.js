import React, { useEffect,useState } from "react";
import "./ProductPage.css";
function ProductPage({productId}) {

  const [product,setProduct]= useState(null);
  const getProduct=async () =>{
    const response = await fetch(`http://localhost:3000/product/${productId}`);

    const json= await response.json();
    setProduct(json[0]);
  }

  useEffect(()=>{
    console.log(productId);
    getProduct();
  },[])
  return (
    <div className="productPage">
      {product?
      (<div className="body">
        <div className="left">
          <img
            src={product.image}
            alt="Product"
            id="productImage"
          />
        </div>
        <div className="right">
          <h1>{product.name}</h1>
          <p>
            Hello my name is Gaurang Rastogi, and I am giving you this product,
            it is a pair of earphone and Hello my name is Gaurang Rastogi, and I
            am giving you this product, it is a pair of earphone and Hello my
            name is Gaurang Rastogi, and I am giving you this product, it is a
            pair of earphone and I dont have any words jusy buy it.
          </p>
          <h1>{product.price}</h1>
          <button id="cart">Add To Cart</button>    
        </div>
      </div>
      ):(
          <h1>No Product found</h1>
      )}
    </div>
  );
}

export default ProductPage;
