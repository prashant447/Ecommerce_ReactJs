import React from 'react'
import fetchUser from '../../hooks/fetchUser'
import Product from '../Product/Product'


const RelatedProducts = ({categoriesId, productId}) => {

  const {data} = fetchUser(`/api/products?populate=*&[filters][id] [$ne]=${productId}&filters [categories] [id] =${categoriesId}&pagination[start]=0&pagination[limit]=8`)
  return (
    <>

    <div className="related-products">
        <Product headingText = 'RELATED PRODUCTS' products={data} />
    </div>
      
    </>
  )
}

export default RelatedProducts
