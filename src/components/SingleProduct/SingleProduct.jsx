import React, { useState } from 'react'

import { useParams } from 'react-router-dom'

import {FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPinterest, FaCartPlus } from 'react-icons/fa'
import RelatedProducts from '../Relatedproducts/RelatedProducts'
import fetchUser from '../../hooks/fetchUser'
import { useGlobalContext } from '../utils/ContextApp'



const SingleProduct = () => {
  const {id} = useParams();

  const {data} = fetchUser(`/api/products?populate=*&[filters][id]=${id}`)
  const [quantity, setQuantity] = useState(1)

  const {handleAddToCart} = useGlobalContext()
  
  const increment= () =>{
    setQuantity(quantity+1)
  }
  
  const decrement= () =>{
    setQuantity(quantity-1)
    if(quantity>1){

      setQuantity(quantity-1)
    }
   else{
        setQuantity(1)
   }

  }
 
  const product = data[0]?.attributes
  return (
    <>
      <div className="single-product-container">
        <div className="single-item">

          <div className="right">
          <img src= {"http://localhost:1337" + product?.img?.data[0]?.attributes?.url} alt=""/>
          
          </div>

          <div className="left">
              <span><h3>{product?.title}</h3></span>
              <span> <h3>₹{product?.price}</h3></span>
              <span><p>{product?.desc}</p></span>

              <div className="info">
                <button onClick={increment}>+</button>
                
                
                <button className='para-info'>{quantity}</button>
                <button onClick={decrement}>-</button>

                <button className='cart-icon' onClick={() => {
                  handleAddToCart(data[0], quantity)
                  setQuantity(1)
                }}><FaCartPlus/>ADD TO CART</button>

                
              </div>

              <div className='width'></div>
              <div className="social-icon">

               <span>Category: {product?.categories?.data[0]?.attributes?.title}</span>
               <span>Share: <FaFacebookF/>  <FaTwitter/>   <FaInstagram/><FaLinkedinIn/>   <FaPinterest/></span>
              </div>
          </div>


        </div>
        <RelatedProducts productId={id} categoriesId={product?.categories?.data[1]?.id}/>
      </div>
    </>
  )
}

export default SingleProduct
