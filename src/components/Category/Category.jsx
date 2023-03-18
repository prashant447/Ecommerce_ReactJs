import React from 'react'
import {  useNavigate } from 'react-router-dom'


const Category = ({categories}) => {
  let navigate = useNavigate();
  return (
    <>
     
          <div className="category-item">

            {
              categories.map((item) =>{

              
                return(
                    <div key={item.id} onClick = {() => navigate(`/category/${item.id}`)}>
                    <img src={"http://localhost:1337" + item.attributes.img.data.attributes.url} alt=""/>

                    </div>
                )
              })
            }
           
        
          </div>
          
    
    </>
  )
}

export default Category
