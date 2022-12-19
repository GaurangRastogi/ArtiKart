import React, { useEffect,useState } from "react";
import "./ProductPage.css";
function ProductPage({productId,userId}) {
  const [product,setProduct]= useState(null);
  const [buttonValue,setButtonValue]=useState("");
  const getProduct=async () =>{
    const response = await fetch(`http://localhost:3000/product/${productId}`);
    const json= await response.json();
    setProduct(json[0]);
  }

  const addToCart =async ()=>{
    const idOfUser=userId.split(" ")[0];
    const response = await fetch("http://localhost:3000/cart", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        id:idOfUser,
        prodId:productId
      }),
    });
  
    const json = await response.json();
    setButtonValue("Remove from Cart");
  }
  const removeFromCart=async()=>{
    const idOfUser=userId.split(" ")[0];
    const response = await fetch("http://localhost:3000/cart", {
      method: "Delete",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        id:idOfUser,
        prodId:productId
      }),
    });
    const json=await response.json();
    // console.log(json);
    setButtonValue("Add to Cart");
  }
  const cartUtility = ()=>{

      if(buttonValue==="Add to Cart"){
          addToCart();
      }
      else{
        removeFromCart();

      }
  }


  const buttonVal =async ()=>{
    const idOfUser=userId.split(" ")[0];

    const response = await fetch(`http://localhost:3000/cart/${idOfUser}/${productId}`);
    const json=await response.json();
  
    if(json.message==="InCart")
        setButtonValue("Remove from Cart");
    else
        setButtonValue("Add to Cart");
  }

  useEffect(()=>{
    getProduct();
    buttonVal();
  },[productId]);


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
          <button id="cart" onClick={()=>cartUtility()}>{buttonValue}</button>    
        </div>
      </div>
      ):(
          <h1>No Product found</h1>
      )}
    </div>
  );
}

export default ProductPage;
