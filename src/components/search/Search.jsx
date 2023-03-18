import React, { useState } from 'react'
import {AiOutlineClose} from 'react-icons/Ai'
import assets from '../../assets/products/earbuds-prod-1.webp'
import { useNavigate } from 'react-router-dom'
import fetchUser from '../../hooks/fetchUser'

const Search = ({setSearchCart}) => {
  const [query, setQuery] = useState('')
  let navigate = useNavigate();

   const handleChange= (e) =>{
         setQuery(e.target.value)
         
   }

     let {data} = fetchUser(`/api/products?populate=*&filters[title][$contains]=${query}`)
   
     if(!query.length){
      data=null
     }
   
  return (
    <>

     <div className="search">
    <form>
        <input type="text" placeholder='SEARCH FOR PRODUCTS' autoFocus onChange={handleChange} values={query}/>
         <AiOutlineClose onClick={() =>setSearchCart(false)} />

        <p>Start typing to see product you are looking for</p>
    </form>

        
        <div className="search-item">
        

          {
          data && data?.map((item) =>
              (
                <div key={item.id}>
                <div className="add-to-cart" onClick={()=>{
                  navigate(`/product/${item.id}`)
                  setSearchCart(false)
                }}>
                <img src= {"http://localhost:1337" + item?.attributes?.img?.data[0]?.attributes?.url} alt=""/>
       

       <div className="card-details">
           <p>{item.attributes.title} </p>
           <p className='para-search'>{item.attributes.desc}</p>
          
           </div>
           </div>
                </div>
              )
            )
          }
       
       
           
            
        </div>

     </div>
      
    </>
  )
}

export default Search
