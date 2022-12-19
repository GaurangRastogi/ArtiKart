import React, { useState, useEffect } from "react";
import './Cart.css';
import Product from "../../Components/Product/Product";

function Cart({ userId, click }) {
  const [cartData, setCartData] = useState(null);
  const getCartData = async () => {
    const id = userId.split(" ")[0];
    const response = await fetch(`http://localhost:3000/cart/${id}`);
    const json = await response.json();
    setCartData(json);
  };

  useEffect(() => {
    getCartData();
  }, []);

  return (
    <div className="cardData">
      {cartData &&
        cartData.map((prod, i) => (
          <Product
            key={i}
            product={prod}
            click={() => click(prod._id)}
          />
        ))}
    </div>
  );
}

export default Cart;
