import React, { createContext, useState } from 'react'
import axios from './Axios';
import { useEffect } from 'react';

export const ProductContext =createContext();

function Context(props) {

    useEffect(()=>{
       getProducts();
    },[])
    const [products, setProducts] = useState(JSON.parse(localStorage.getItem("products"))||null);;
    const getProducts=async()=>{
        try{
         
        }catch(err){
            console.log(err);
        }
    }

   


  return (
    <ProductContext.Provider value={{products, setProducts}}>
     {
        props.children
    }
    </ProductContext.Provider>
  )
}

export default Context
