import React, { useContext, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ProductContext } from '../Utils/Context'; 

function Details() {
  const navigate=useNavigate();


 

  const { products, setProducts } = useContext(ProductContext);   // Access context values
  const { id } = useParams();

  
  
  // Find the product with the matching id
  useEffect(()=>{
    const productdetail = products.find(p => p.id == id); 

  },[products])
  const productdetail = products.find(p => p.id == id);  // Use find instead of filter
  
  if (!productdetail) {
    // Handle case when product is not found
    return <div>Product not found</div>;
  }


  const deleteproduct=()=>{
    const updatedProducts = products.filter(p => p.id!= id);
  setProducts(updatedProducts)
  navigate("/")
   
  }
  

  return (
    <div className='w-[80%] h-full m-auto p-10 flex justify-center gap-20'>
      <div className='w-[40%] h-[80%] flex justify-center items-center mt-20'>
        <img src={productdetail.image} className='object-contain' alt={productdetail.title} />
      </div>
      
      <div className='w-[40%] text-left space-y-2 p-3'>
        <h1 className='text-4xl'>{productdetail.title}</h1>
        <h1 className='text-3xl text-zinc-500'>{productdetail.category}</h1>
        <h2 className='text-red-600 font-bold text-2xl'>{productdetail.price}$</h2>
        <p className='text-xl font-semibold flex mt-10'>{productdetail.description}</p>
        
        <div className='flex justify-between mt-20 text-red-600'>
          <Link to={`/edit/${productdetail.id}`} className='py-3 px-3 border rounded text-2xl font-bold hover:scale-109 text-blue-400 border-blue-300 hover:text-green-400 mb-3 hover:border-green-800'>
            Edit
          </Link>
          <button onClick={deleteproduct}  className='py-3 px-3 border rounded text-2xl font-bold hover:scale-109 text-blue-400 border-blue-300 hover:text-green-400 mb-3 hover:border-green-800'>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Details;
