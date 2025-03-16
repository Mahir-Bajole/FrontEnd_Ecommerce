import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import { data, Link, useLocation } from 'react-router-dom'
import { useContext } from 'react';
import { ProductContext } from '../Utils/Context'; 
import Loading from './Loading';
import axios from '../Utils/Axios';



function Home() {
  const { products, setProducts } = useContext(ProductContext);  
  
  const {search}=useLocation();
  console.log(products)


  const [filteredproduct,setfilteredproduct]=useState(null);
 
  const cat=decodeURIComponent(search.split("=")[1]);
  const productcategory=async()=>{
    try{
      const {data}= await axios.get(`/products/category/${cat}`);
      setfilteredproduct(data);
     
    }catch(e){
      console.log(e);
    }
  }

  useEffect(()=>
  {
    
    
      
    if(cat && cat!=="undefined"){
      setfilteredproduct(products.filter(p=>p.category===cat))

    }else{
      setfilteredproduct(products);

    }

   
  },[cat,products])
  

 
  return products?.length > 0 ?(
  <>
  <Nav/>

<div className='w-[85%]  flex flex-wrap mt-14  overflow-x-hidden overflow-y-auto'>

    {
      filteredproduct && filteredproduct.map((product,index)=>{
        return <Link key={index} to={`/details/${product.id}`} className="w-[16vw] h-[40vh] shadow-xl ml-5 p-3 mt-5 rounded-2xl border flex flex-col justify-center items-center">
        <div
        className="w-full h-[80%] bg-contain bg-center bg-no-repeat items-center mb-5 hover:scale-115 "
        style={{ backgroundImage: `url(${product.image})` }}
        ></div>
        
        <div className='flex items-center justify-center text-center mb-4'>
        <h1 className=' px-5 hover:text-blue-700'>{product.title}</h1>
        </div>
        </Link> 
      })
    }
</div>

</>
):(
      
      <Loading/>
  );
}

export default Home
