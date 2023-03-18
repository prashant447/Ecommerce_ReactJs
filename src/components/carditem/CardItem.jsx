import React from 'react'
import assets from '../../assets/products/earbuds-prod-1.webp'
import {AiOutlineClose} from 'react-icons/Ai'
import { useGlobalContext } from '../utils/ContextApp'

const CardItem = () => {
  const {cartItem, handleRemoveCart, handleCartProductQuantity} = useGlobalContext()
 
  return (
    <>

      {
       cartItem && cartItem.map((item) =>{
          return(
            <div className="add-to-cart" key={item.id}>
       
       <img src= {"http://localhost:1337" + item?.attributes?.img?.data[0]?.attributes?.url} alt=""/>
           
    
                 <AiOutlineClose onClick={() => handleRemoveCart(item)}/>
            <div className="card-details">
                <p>{item.attributes.title}</p>
                <div className='show-inc'>
                <span onClick={() => handleCartProductQuantity('inc', item)}>+</span>
                <span>{item.attributes.quantity}</span>
                <span  onClick={() => handleCartProductQuantity('dec', item)}>-</span>
                </div>
    
              
    
                 <div className='price-multiple'>
                 <span>{item.attributes.quantity}</span>
            <span>×</span>
           <span>₹{item.attributes.price * item.attributes.quantity}</span>
                 </div>
               
           </div>
          
       </div>
          )
        })
      }
      
   



    </>
  )
}

export default CardItem
