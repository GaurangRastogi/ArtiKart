import React from 'react'
import './Product.css';
function Product({product}){
    return(
        <div className='product'>
           <img src={product.image} alt="Product" className="productType"/>
           <div className="productName">{product.name}</div>
           <div className='productDescription'>{product.description}</div>
           <div className="productPrice"> Rs.{product.price}</div>
        </div>
    )
}   

export default Product;