import React, { useState, useContext } from 'react';
import { nanoid } from 'nanoid';
import { ProductContext } from '../Utils/Context';
import { useNavigate } from 'react-router-dom';

function Create() {
    const navigate=useNavigate();
  const [image, setimg] = useState("");
  const [title, settittle] = useState("");
  const [category, setcategory] = useState("");
  const [price, setprice] = useState("");
  const [description, setdecs] = useState("");
  
  const { products, setProducts } = useContext(ProductContext); 
  const addproduct = (e) => {
    e.preventDefault();
  
    if (title.trim().length < 5 || category.trim().length < 5 || price.trim().length < 5 || description.trim().length < 5) {
      alert("All fields must be filled and have at least 5 characters");
      return;
    }
  
    const product = {
      id: nanoid(),
      image,
      title,
      category,
      price,
      description
    };
  
    const previousProducts = JSON.parse(localStorage.getItem("products")) || [];

    
    const updatedProducts = [...previousProducts, product];

   
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
    navigate("/")
  }
  
    
  

  return (
    <form onSubmit={addproduct} className='w-screen h-screen p-[5%] flex flex-col items-center'>
      <h1 className='text-3xl w-1/2 mb-20'>Add New Product</h1>
      <input
        type='text'
        onChange={(e) => setimg(e.target.value)}
        value={image}
        placeholder='image Link'
        className='border-2 border-transparent hover:border-blue-800 w-1/2 text-xl bg-zinc-50 rounded p-2 outline-none mb-2'
      />
      <input
        type='text'
        onChange={(e) => settittle(e.target.value)}
        value={title}
        placeholder='Title'
        className='border-2 border-transparent hover:border-blue-800 w-1/2 text-xl bg-zinc-50 rounded p-2 outline-none mb-2'
      />
      <div className='w-1/2 flex items-center justify-between gap-3'>
        <input
          type='text'
          onChange={(e) => setcategory(e.target.value)}
          value={category}
          placeholder='Category'
          className='border-2 border-transparent hover:border-blue-800 w-2/4 text-xl bg-zinc-50 rounded p-2 outline-none mb-2'
        />
        <input
          type='text'
          onChange={(e) => setprice(e.target.value)}
          value={price}
          placeholder='Price'
          className='border-2 border-transparent hover:border-blue-800 w-2/4 text-xl bg-zinc-50 rounded p-2 outline-none mb-2'
        />
      </div>
      <textarea
        rows={5}
        onChange={(e) => setdecs(e.target.value)}
        value={description}
        placeholder='Description'
        className='border-2 border-transparent hover:border-blue-800 w-1/2 text-xl bg-zinc-50 rounded p-2 outline-none mb-10'
      ></textarea>
      <button className='w-1/2 py-3 px-3 rounded text-xl font-bold text-white bg-blue-300 hover:bg-blue-500'>
        Add
      </button>
    </form>
  );
}

export default Create;
