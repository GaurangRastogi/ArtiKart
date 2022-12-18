import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Product from '../../Components/Product/Product';
import './LandingPage.css';
function LandingPage({homepage}) {

  const [product,setProduct]=useState(null);

  const getProduct= async()=>{
    const response = await fetch('http://localhost:3000/main');
    const json = await response.json();
    setProduct(json);
  }
  useEffect(()=>{
    getProduct();
  },[]);
  return (
    <div className='landingPage'>
        <Navbar homepage={homepage}/>
        <div className='mainProduct' style={{display:'flex',flexWrap:'wrap',marginLeft:"3rem",gap:"3rem"}}>
          {product&&product.map((prod)=>(
            <Product product={prod} key={product._id}/>
          ))};
        </div>
    </div>
  )
}

export default LandingPage