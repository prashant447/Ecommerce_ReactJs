import React, {useEffect, useState} from 'react'
import { AiOutlineSearch, AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/Ai';
import { useNavigate } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Search from '../search/Search';
import { useGlobalContext } from '../utils/ContextApp';


const Header = () => {
  const navigate = useNavigate()

  const [scrolled, setScrolled] = useState(false)
  const [showCart, setShowCart] = useState(false)
  const [searchCart, setSearchCart] = useState(false)

  const {cartCount} = useGlobalContext()


  const stickyScroll = () =>{
           const scroll = window.scrollY
          //  console.log(scroll)
           if(scroll>200){
             setScrolled(true)
           }
           else{
            setScrolled(false)
           }
  }

  useEffect(() => {
       window.addEventListener('scroll', stickyScroll);
  }, [])
  
  return (
    <>
    
      <div className= {`header ${scrolled ? "sticky-header": ""}`}>
        <div className="main-header">
          <div className="left">
              <nav>
                <ul>
                  <li onClick={() => navigate('/')}>HOME</li>
                  <li onClick={() => navigate('/')}>ABOUT</li>
                  <li onClick={() => navigate('/')}>CATEGORIES</li>
                </ul>
              </nav>
          </div>

          <div className="image">
            <h1 onClick={() => navigate('/')}>ECOMMERCE STORE...</h1>
            

          </div>

          <div className="right">

             <AiOutlineSearch onClick={() =>setSearchCart(true)}/>
             <AiOutlineHeart/>
             <div className="cart-icon" onClick={() =>setShowCart(true)}>
             <AiOutlineShoppingCart/>
              {!!cartCount && <span>{cartCount}</span>}
             </div>
          </div>
        </div>
      </div>

     { showCart && <Cart setShowCart={setShowCart}/>}
     { searchCart && <Search setSearchCart={setSearchCart}/>}
    </>
  )
}

export default Header
