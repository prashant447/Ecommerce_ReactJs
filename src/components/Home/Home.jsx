import axios from 'axios'
import React, { useEffect } from 'react'
import Category from '../Category/Category'
import Product from '../Product/Product'
import fetchApi from '../utils/api'
import { useGlobalContext } from '../utils/ContextApp'
import img from '../../assets/banner-img.png'

const Home = () => {
  const {categories ,setcategories, setProducts, products} = useGlobalContext();

  useEffect(() => {
    getCategories()
    getProducts()

  }, [])

  const getCategories =() =>{
    
    fetchApi("/api/categories?populate=*")
       .then((res) => {
        //  console.log(res)
         setcategories(res.data)
    })
    .catch( (error) =>{
      console.log(error)
    })

    
  }


  const getProducts =() =>{
    
    fetchApi("/api/products?populate=*")
       .then((res) => {
        //  console.log(res)
        setProducts(res.data)
    })
    .catch( (error) =>{
      console.log(error)
    })

    
  }


  
  
  return (
    <>
      <div className="home">
          <div className="main-home">
            <div className="hero-left">
              <h1>Boat</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam perspiciatis non rem voluptatem odio aliquid?</p>
              <button className='btn-home1'>READ MORE</button>
              <button className='btn-home2'>SHOP NOW</button>
            </div>

            <div className="hero-right">
            <img src={img} alt=""/>
             
            </div>

          </div>
      </div>

      <div className="category-layout">
      <Category categories={categories}/>
      </div>

      <Product products={products} headingText= "POPULAR PRODUCTS"/>
     
     

    

    </>
  )
}

export default Home
