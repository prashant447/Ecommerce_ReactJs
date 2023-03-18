import React from 'react'
import {AiOutlineClose} from 'react-icons/Ai'
import {BsCartX} from 'react-icons/Bs'
import CardItem from '../carditem/CardItem'
import { useGlobalContext } from '../utils/ContextApp'

import { paymentRequest } from '../utils/api'
import { loadStripe } from '@stripe/stripe-js'


const Cart = ({setShowCart}) => {
  const {cartSubTotal, cartItem} = useGlobalContext()
  const stripePromise = loadStripe(`pk_test_51Ml8tbSHOSTrvGAop1l7iZ5hd1Yk4GVTtIUOw7MfJRd4qJLiazPNzmfBcsNQIcspsAikoxJHnQHrPyeDP8mf2Odb00eMuzZTf7`)

  const handlePayement = async() =>{
    try {
      const stripe = await stripePromise;
    const res = await paymentRequest.post('/api/orders', {
      products: cartItem,
    });

    await stripe.redirectToCheckout({
      sessionId: res.data.stripeSession.id
    })
    } catch (error) {
      console.log(error)
    }
  }



  return (
    <>
     <div className="cart">
          <div className="opacity"></div>
          <div className="cart-content">
              
              <div className="first-item">
                <h3>SHOPPING CART</h3>
                <div className="close" onClick={() => setShowCart(false)}>

                <p><AiOutlineClose/>CLOSE</p>
                </div>
              </div>
               <div className='width'></div>
               
                  
                  {/* close item */}
              {!cartItem?.length && <div className="second-item">
                <div className="no-product">
                    <span><BsCartX/></span>
                    <p>No products in the cart</p>
                    <button>RETURN TO SHOP</button>
                </div>
               </div>}


              {!!cartItem?.length && <>
               <div>

                <CardItem/>
               </div>

                <div className="subtotal"> 
                
                  <div className="total">
                    <h3>SUBTOTAL:</h3>
                    <span>₹{cartSubTotal}</span>
                  </div>
                  <div className='width'></div>
                   <button onClick={handlePayement}>CHECKOUT</button>
                </div>
               </>}
               


          </div>
        
        </div> 
    </>
  )
}

export default Cart
