import React, { useEffect, useState } from "react";
import "./ProductPageAdmin.css";
function ProductPageAdmin({ productId, sellerId }) {
  const [product, setProduct] = useState(null);

  const getProduct = async () => {
    console.log("called");
    const response = await fetch(`http://localhost:3000/product/${productId}`);
    const json = await response.json();
    setProduct(json[0]);
  };

  const deleteProduct = () => {
    console.log("Delete");
  };
  const updateProduct = () => {
    console.log("Update");
  };

  useEffect(() => {
    getProduct();
  }, [productId]);

  return (
    <div className="productPage">
      {product&&
      <div className="body">
        <div className="left">
          <img src={product.image} alt="Product" id="productImage" />
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
          <button id="cart" onClick={() => deleteProduct()}>
            Delete Product
          </button>
          <button id="cart" onClick={() => updateProduct()}>
            Update Product
          </button>
        </div>
      </div>
      }
    </div>
  );
}

export default ProductPageAdmin;
