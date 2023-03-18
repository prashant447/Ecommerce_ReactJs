import React from 'react'
import Products from '../Products/Products'


const Product = ({title, products,headingText}) => {
  return (
    <>
       <div className="popular-product">
        {!title &&<div>
          <h2>{headingText}</h2>
            <div className='width'></div>
            </div>}
            
          <div className="popular">

            {
             products && products.map((item) =>(
                <div key={item.id}>
                <Products key={item.id} data={item.attributes} id={item.id}/>
                
                </div>
              ))
            }
            
            
            
          </div>
       </div>
      
    </>
  )
}

export default Product
