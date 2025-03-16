
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './Componants/Home.jsx'
import Details from './Componants/Details.jsx'
import { Link } from "react-router-dom";
import Create from './Componants/Create.jsx'
import Edit from './Componants/Edit.jsx'
import { useState,useEffect } from 'react'

function App() {
  const [products, setproducts] = useState([]);

  // On page load, check if products exist in localStorage and update the state
  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products'));
    if (storedProducts) {
      setproducts(storedProducts);
    }
  }, []);

  const {search,pathname}=useLocation();
  console.log(search,pathname);

  

  return (
   <div className='w-screen h-screen  overflow-x-hidden flex'>

{(pathname !== "/" || search.length > 0) && (
      <Link to={'/'} className='border h-fit absolute rounded-xl p-1 left-65 top-3'>
        Home
      </Link>
    )}
  


    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/create' element={<Create/>} />
      <Route path='/edit/:id' element={<Edit/>} />
      <Route path="/details/:id" element={<Details />} />
      
    </Routes>
   
    

   </div>
  )
}

export default App
