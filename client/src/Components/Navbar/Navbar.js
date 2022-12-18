import React, { useEffect } from "react";
import Logo from "../../images/logo48.svg";
import Cart from "../../images/cart.svg";
import Search from "../../images/search.svg";
import SignOut from '../../images/signOut.svg';
import "./Navbar.css";
function Navbar({homepage}) {

  const signOut=document.getElementById('right');
  const hello=()=>{
    homepage();
  }
  return (
    <div className="navbar">
      <img src={Logo} alt="kart" width={"100px"} height={"100px"} />
      <h1>Home</h1>
      <h1>About</h1>
      <h1>Contact</h1>
      <img src={Cart} alt="Cart" width={"40px"} height={"40px"}/>
      <div className="search">
        <input type="search" placeholder="Search Product" id="productSearch" />
        <img src={Search} alt="search" width={"40px"} height={"40px"} />
      </div>
      <img src={SignOut} alt="SignOut" width={"40px"} height={"40px"} id="right" onClick={()=>hello()}/>
    </div>
  );
}

export default Navbar;
