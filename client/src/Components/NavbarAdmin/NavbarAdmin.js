import React, { useEffect } from "react";
import Search from "../../images/search.svg";
import SignOut from '../../images/signOut.svg';
import Logo from "../../images/logo48.svg";
import Analytics from "../../images/analytics.svg"
import "./NavbarAdmin.css";

const searchUtility=async (productPage,sellerId,adminHome)=>{
  const data=document.getElementById("productSearch");

  const response = await fetch(`http://localhost:3000/search/${sellerId}/${data.value}`);
  const json = await response.json();

  data.value="";

  if(json.id!==null)
    productPage(json.id);
  else
    adminHome();

}

function NavbarAdmin({homepage,adminHome,adminAnalytics,productPage,sellerId}) {
  return (
    <div className="navbaradmin">
       <img src={Logo} alt="kart" width={"100px"} height={"100px"} />
      <h1 onClick={()=>adminHome()}>Home</h1>
      <h1>About</h1>
      <h1>Contact</h1>
      <img src={Analytics} alt="Cart" width={"40px"} height={"40px"} onClick={()=>adminAnalytics()}/>
      <div className="search">
        <input type="search" placeholder="Search Product" id="productSearch"  onChange={null}/>
        <img src={Search} alt="search" width={"40px"} height={"40px"}  id="searchButton" onClick={()=>searchUtility(productPage,sellerId,adminHome)}/>
      </div>
      <img src={SignOut} alt="SignOut" width={"40px"} height={"40px"} id="right" onClick={()=>homepage()}/>
    </div>
  );
}

export default NavbarAdmin;
