import React from 'react'
import { CiLocationArrow1} from 'react-icons/Ci';
import { AiOutlineInstagram, AiFillFacebook, AiFillTwitterCircle, AiOutlineYoutube, AiFillPhone, AiOutlineMail } from 'react-icons/Ai';
import assets from '../../assets/payments.png'

const Footer = () => {
  return (
    <>

    <div className="footer">
      <div className="top-footer">
          <p>NEWSLETTER</p>
          <h2>SIGN UP FOR LATEST UPDATES AND OFFERS</h2>
         
          <input type="text" className='input-footer' placeholder='Email Address'/>
          <button className='btn-footer'>SUBSCRIBE</button>
         
          
          <p className='para-footer'>Will be used in accordance with our Privacy Policy</p>
          <AiOutlineInstagram/>
          <AiFillFacebook/>
          <AiFillTwitterCircle/>
          <AiOutlineYoutube/>


      </div>

      <div className="mid-footer">
           <div className="mid-inner-footer">
              <div className="grid-col">
                <div className="about">
                  <h2>About</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit blanditiis eligendi corrupti. Molestias, voluptate beatae?</p>
                </div>

                <div className="contact">
                  <h2>Contact</h2>
                 <p><span><CiLocationArrow1/></span> Head Office: Near Union Bank, Tyagi Market, PremNager Dehradun-248007, Uttarakhand, India</p>
                  <p><span><AiFillPhone/></span>Phone:0471 272 0261</p>
                  <p><span><AiOutlineMail/></span>Email: store@gmail.com</p>
                </div>

                <div className="category">
                  <h2>Category</h2>
                  <li>Headphones</li>
                  <li>Smart Watches</li>
                  <li>Bluetooth Speaker</li>
                  <li>Wireless Earbud</li>
                  <li>Home Theater</li>
                  <li>Projectors</li>

                </div>

                <div className="page">
                  <h2>Pages</h2>
                     <li>Home</li>
                     <li>About</li>
                     <li>Privacy Policy</li>
                     <li>Returns</li>
                     <li>Term & Condition</li>
                     <li>Contact Us</li>
                </div>
              </div>
           </div>
      </div>

          <div className="width"></div>
      <div className="bottom-footer">
          <p>Copyright © 2023 ECOMMERCE STORE. All Rights Reserved</p>
          <img src={assets} alt=""/>
      </div>
    </div>
      
    </>
  )
}

export default Footer
