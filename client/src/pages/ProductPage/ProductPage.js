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

  const postFeedBack =async()=>{
      const idOfUser=userId.split(" ")[0];
      const feedBack=document.getElementById("feedBackInput");
      const response = await fetch("http://localhost:3000/cart", {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          userId:idOfUser,
          productId:productId,
          feedBack:feedBack.value
        }),
      });
    
      const json = await response.json();
      console.log(json.message);
      feedBack.value="";
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
            {product.description}
          </p>
          <h1>{product.price}</h1>
          <button id="cart" onClick={()=>cartUtility()}>{buttonValue}</button>  
          {buttonValue==="Remove from Cart"&&(
            <div className="feedBack">
              <input type="text" placeholder="FeedBack" maxLength="5" id="feedBackInput"/>
              <button onClick={()=>postFeedBack()}>Post</button>
            </div>
          )}  
        </div>
      </div>
      ):(
          <h1>No Product found</h1>
      )}
    </div>
  );
}

export default ProductPage;
