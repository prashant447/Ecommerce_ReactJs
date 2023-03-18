import React from 'react'
import { useNavigate } from 'react-router-dom'



const Products = ({data, id}) => {
  const navigate = useNavigate()
  return (
    <>

    <div className="container-products" key={id} onClick={() => navigate(`/product/${id}`)}>

    
    <div className="products-detail">
        
        <img src={"http://localhost:1337" + data.img.data[0].attributes.url} alt=""/>
    </div>

    <div className="products">
            <p>{data.title.slice(0,15)}</p>
             <h3>₹{data.price} </h3>
        </div>
        </div>
       
      
    </>
  )
}

export default Products
