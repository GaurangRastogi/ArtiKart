import React from 'react'
import './HomePage.css';
function HomePage({signIn, signInSeller}) {
  return (
    <div className="homePage">
      <div className='left'>
          <h1>A marketplace for Artisans</h1>
          
          <h3>Mohandas Karamchand Gandhi was born on October 2, 1869 in Porbandar, India.
          Mohandas Karamchand Gandhi was born on October 2, 1869 in Porbandar, India. He became one of the most respected spiritual and political leaders of the 1900's. Gandhi helped free the Indian people from British rule through nonviolent resistance, and is honoured by Indians as the father of the Indian Nation. He was highly influenced by Thoreau, Tolstoy, Ruskin, and above all the life of Jesus Christ. </h3>
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