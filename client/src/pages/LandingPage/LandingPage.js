import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Product from "../../Components/Product/Product";
import ProductPage from "../ProductPage/ProductPage";
import "./LandingPage.css";
function LandingPage({ homepage, id }) {
  const [product, setProduct] = useState(null);
  const [landingState, setlandingState] = useState("mainPage");

  const productClicked = (id) => {
    setlandingState(id);
  };
  const getProduct = async () => {
    const response = await fetch("http://localhost:3000/main");
    const json = await response.json();
    setProduct(json);
  };
  useEffect(() => {
    getProduct();
  }, []);

  const setlandingStateFunction = (data) => {
    // console.log("data",data);
    console.log("landing", data._id);
    if (data) setlandingState(data._id);
  };
  return (
    <div className="landingPage">
      <Navbar
        homepage={homepage}
        home={() => setlandingState("mainPage")}
        searchUtility={setlandingStateFunction}
      />
      {landingState === "mainPage" ? (
        <div
          className="mainProduct"
          style={{
            display: "flex",
            flexWrap: "wrap",
            marginLeft: "3rem",
            gap: "3rem",
          }}
        >
          {product !== null &&
            product.length >= 0 &&
            product.map((prod, i) => (
              <Product
                product={prod}
                key={`${prod._id}  ${i}`}
                click={() => productClicked(prod._id)}
              />
            ))}
        </div>
      ) : (
        <ProductPage productId={landingState} />
      )}
    </div>
  );
}

export default LandingPage;
