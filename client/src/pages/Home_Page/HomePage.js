import React from 'react'
import './HomePage.css';
function HomePage({signIn, signInSeller}) {
  return (
    <div className="homePage">
      <div className='left'>
          <h1>A marketplace for Artisans</h1>
          
          <h3>
          Namaste, fellow Artisans<br/><br/>
          It is an online marketplace for artisans and organisations to sell authentic handmade products globally under their own brand name, ensuring customers a quality purchase at a fair price.<br/><br/>
          We welcome you to our website named Artikart, if you want to buy from our website, get yourself registered as Buyer, otherwise
          to sell you can register in Seller section.
          <br/><br/>
          Happy Visit
          </h3>
          <button className="button buy" onClick={()=>signIn()}>Buy</button>
          <button className="button sell" onClick={()=>signInSeller()}>Sell</button>
      </div>

      <div className='right'>
        <img src="https://landy-web.netlify.app/img/svg/developer.svg" alt="home"/>
      </div>
    </div>
  )
}

export default HomePage;