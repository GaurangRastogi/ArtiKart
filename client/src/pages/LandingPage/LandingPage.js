import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Product from "../../Components/Product/Product";
import ProductPage from "../ProductPage/ProductPage";
import Cart from "../CartPage/Cart";
import "./LandingPage.css";
import About from "../AboutPage/About";
import Contact from "../Contact/Contact";
function LandingPage({ homepage, id }) {
  const [product, setProduct] = useState(null);
  const [landingState, setlandingState] = useState("mainPage");

  const productClicked = (prod_id) => {
    setlandingState(prod_id);
  };
  const getProduct = async () => {
    const response = await fetch("http://localhost:3000/main");
    const json = await response.json();
    setProduct(json);
  };
  useEffect(() => {
    getProduct();
  }, []);

  const cartPage = (data) => {
    setlandingState("cartPage");
  };
  const setlandingStateFunction = (data) => {
    if (data) setlandingState(data._id);
  };

  const setAboutPage = () => {
    setlandingState("aboutPage");
  };

  const setContactPage = () => {
    setlandingState("contactPage");
  };
  return (
    <div className="landingPage">
      <Navbar
        homepage={homepage}
        home={() => setlandingState("mainPage")}
        searchUtility={setlandingStateFunction}
        cartClick={cartPage}
        about={setAboutPage}
        contact={setContactPage}
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
      ) : landingState === "cartPage" ? (
        <Cart userId={id} click={productClicked} />
      ) : landingState === "aboutPage" ? (
        <About />
      ) : landingState === "contactPage" ? (
        <Contact />
      ) : (
        <ProductPage productId={landingState} userId={id} />
      )}
    </div>
  );
}

export default LandingPage;
