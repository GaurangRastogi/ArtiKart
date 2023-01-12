import React from "react";
import NavbarAdmin from "../../Components/NavbarAdmin/NavbarAdmin";
import Add from "../../images/addOne.svg";
import Product from "../../Components/Product/Product";
import "./Admin.css";
import { useState, useEffect } from "react";
import ProductPageAdmin from "../ProductPageAdmin/ProductPageAdmin";
import AddItem from "../AddItem/AddItem";
function Admin({ homepage, id }) {
  const [adminPageState, setAdminPageState] = useState("admin");
  const [myProducts, setMyProducts] = useState(null);
  const [flag,setFlag]=useState(0);
  const getProducts = async () => {
    const response = await fetch(`http://localhost:3000/myproducts/${id}`);
    const json = await response.json();
    setMyProducts(json);
  };
  useEffect(() => {
    getProducts();
  }, [flag]);

  const changeFlag=()=>{
    setFlag(!flag);
  }
  const adminHome = () => {
    setAdminPageState("admin");
  };
  const adminAnalytics = () => {
    setAdminPageState("analytics");
  };
  const productPage = (productId) =>{
    setAdminPageState(productId);
  }
  const addProducts = () => {
    setAdminPageState("addProducts");
  };
  return (
    <div className="adminPage">
      <NavbarAdmin
        homepage={homepage}
        adminHome={adminHome}
        adminAnalytics={adminAnalytics}
        productPage={productPage}
        sellerId={id}
      />
      {adminPageState === "admin" ? (
        <div className="myProducts">
          <img src={Add} alt={"AddItem"} width={"50px"} id="addItem" onClick={()=>addProducts()}/>
          <br/>
          <div className="products">
            {myProducts !== null &&
              myProducts.length >= 0 &&
              myProducts.map((prod, i) => (
                <Product
                  product={prod}
                  key={`${prod._id}  ${i}`}
                  click={() =>productPage(prod._id)}
                />
              ))}
          </div>
        </div>
      ) : adminPageState === "addProducts" ? (
        <AddItem id={id} toggleFlag={changeFlag}/>
      ) : adminPageState==="analytics" ?(
        <h1>Analytics</h1>
      ):(
        <ProductPageAdmin productId={adminPageState} sellerId={id}/>
      )}
    </div>
  );
}

export default Admin;
