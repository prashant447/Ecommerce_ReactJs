import React from 'react'
import { useParams } from 'react-router-dom'
import fetchUser from '../../hooks/fetchUser'
import Product from '../Product/Product'

const SingleCategory = ({}) => {
  const {id} =useParams()



  const {data} = fetchUser(`/api/products?populate=*&[filters][categories][id]=${id}`)
 
  return (
    <>

    <div className="single-cat">
    <div className="cat-title">
            <h3>{data[0]?.attributes?.categories?.data[0]?.attributes?.title}</h3>
            
     </div>
        <div className="layout">
           
            <Product products = {data} title={true} />
        </div>
        
    </div>
      
    </>
  )
}

export default SingleCategory
