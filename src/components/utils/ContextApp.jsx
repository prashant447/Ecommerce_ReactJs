import { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  // const location = useLocation();
   const [categories, setcategories] = useState([])
   const [products, setProducts] = useState([])
   const [cartCount, setCartCount] = useState(0)
   const [cartItem, setCartItem] = useState([])
   const [cartSubTotal, setCartSubTotal] = useState(0)
   
  

  useEffect(() => {
    window.scrollTo(0 ,0)
    
  }, [location])
  
     
  useEffect(() => {
      let count = 0
   cartItem.map(item => (count += item.attributes.quantity))
   setCartCount(count);



    let subTotal = 0
    cartItem.map(item => (subTotal += item.attributes.price * item.attributes.quantity))
    setCartSubTotal(subTotal)
  }, [cartItem])
  

    const handleAddToCart = (product, quantity) =>{
            let items = [...cartItem]
            let index = items.findIndex((p) =>(p.id=== product.id))
            if(index !== -1){

              items[index].attributes.quantity += quantity
            }
            else{
              product.attributes.quantity = quantity
              items = [...items, product]
            }
            setCartItem(items)

    };

    const handleRemoveCart = (product) =>{
            let items = [...cartItem]
            items = items.filter(p => p.id !== product.id)
            setCartItem(items)
    };

    const handleCartProductQuantity = ( type, product) =>{
      let items = [...cartItem]
      let index = items.findIndex((p) =>(p.id=== product.id))
      if (type === 'inc') {
         items[index].attributes.quantity += 1

      } else if  (type === 'dec'){
          if ( items[index].attributes.quantity === 1) {
            return;
          }
          items[index].attributes.quantity -=1
           
      }
      setCartItem(items)
    };
    

   
  return (
  <AppContext.Provider value={{categories, setcategories, products, setProducts,cartItem, setCartItem,cartCount, setCartCount, cartSubTotal, setCartSubTotal, handleRemoveCart, handleCartProductQuantity, handleAddToCart}}>{children}</AppContext.Provider>
  )
};

// Custom hook
const useGlobalContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
export { useGlobalContext };

