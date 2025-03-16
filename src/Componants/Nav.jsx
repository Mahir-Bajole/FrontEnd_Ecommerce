import React from 'react'
import { ProductContext } from '../Utils/Context'; 
import { useContext } from 'react';
import { Link } from 'react-router-dom'

function Nav() {

  const { products, setProducts } = useContext(ProductContext); 
  const product_category = products?.reduce((acc, cv) => [...acc, cv.category], []);
  const disting_category = [...new Set(products?.map(p => p.category) || [])];


 
  const color = () => {
    return `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${(Math.random()).toFixed(2)})`;
  };
  
  return (
    <nav className='w-[15%] h-screen bg-zinc-50 flex flex-col items-center py-5'>
   
    <a href="/create" className='py-3 px-3 border rounded border-blue-300 text-blue-400 mb-3'>
      Add new Products
    </a>
    <hr className='w-[80%] opacity-50'></hr>
  
   
    <h1 className='mb-3 w-[80%] font-semibold text-lg'>Category Filter</h1>
  
   
    <div className='w-[80%]'>
      {disting_category?.length > 0 ? (
        disting_category.map(c => (
          <Link to={`/?category=${c}`}
          key={c} className=' hover:scale-103 mb-3 flex items-center'>
            <span style={{backgroundColor:color()}} className='mr-2 w-[15px] h-[15px]  rounded-full'></span> 
            {c}
          </Link>
        ))
      ) : (
        <p className="text-gray-500">No categories found</p>
      )}
    </div>
  </nav>
  

  )
}

export default Nav
