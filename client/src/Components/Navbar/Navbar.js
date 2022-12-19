import React, { useEffect } from "react";
import Avatar from '@mui/material/Avatar';
import Logo from "../../images/logo48.svg";
import Cart from "../../images/cart.svg";
import Search from "../../images/search.svg";
import SignOut from '../../images/signOut.svg';
import "./Navbar.css";
function Navbar({homepage,home,searchUtility,cartClick}) {
  const signOut=document.getElementById('right');
 
  const utility=()=>{
      let i=0;
      i++;
  }

  const searchFunction=async () =>{
    const searchData=document.getElementById("productSearch");
    const response = await fetch(`http://localhost:3000/search/${searchData.value}`);

    const json= await response.json();
    if(json)
      searchUtility(json[0]);
    searchData.value="";
  }

  return (
    <div className="navbar">
      <img src={Logo} alt="kart" width={"100px"} height={"100px"} />
      <h1 onClick={()=>home()}>Home</h1>
      <h1>About</h1>
      <h1>Contact</h1>
      <img src={Cart} alt="Cart" width={"40px"} height={"40px"} onClick={()=>cartClick()}/>
      <div className="search">
        <input type="search" placeholder="Search Product" id="productSearch"  onChange={()=>utility()}/>
        <img src={Search} alt="search" width={"40px"} height={"40px"}  id="searchButton" onClick={()=>searchFunction()}/>
      </div>
      <img src={SignOut} alt="SignOut" width={"40px"} height={"40px"} id="right" onClick={()=>homepage()}/>
    </div>
  );
}

export default Navbar;
