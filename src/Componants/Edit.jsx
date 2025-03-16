import React, { useState, useContext, useEffect } from 'react';
import { ProductContext } from '../Utils/Context';
import { useNavigate, useParams } from 'react-router-dom';

function Edit() {
    const { id } = useParams();
    console.log(id);
    const navigate = useNavigate();
    const { products, setProducts } = useContext(ProductContext);

    const [image, setImg] = useState("");
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDesc] = useState("");

    
    const pr = products.find(p => String(p.id) === String(id)); 
console.log(pr);

    useEffect(() => {
        if (pr) {
            setImg(pr.image);
            setTitle(pr.title);
            setCategory(pr.category);
            setPrice(pr.price);
            setDesc(pr.description);
        }
    }, [pr]); 

    const updateProduct = (e) => {
        e.preventDefault();

        if (title.trim().length < 5 || category.trim().length < 5 || price.trim().length < 1 || description.trim().length < 5) {
            alert("All fields must be filled and meet character limits.");
            return;
        }

       
        const previousProducts = JSON.parse(localStorage.getItem("products")) || [];

       
        const index = previousProducts.findIndex(p =>String(p.id) === String(id));
        if (index === -1) {
            alert("Product not found!");
            return;
        }

       
        const updatedProduct = { id: String(id), image, title, category, price, description };

        let copydata = [...previousProducts];
        copydata[index] = { ...copydata[index], ...updatedProduct };

       
        setProducts(copydata);
        localStorage.setItem("products", JSON.stringify(copydata));

        navigate("/");
    };

    return (
        <form onSubmit={updateProduct} className='w-screen h-screen p-[5%] flex flex-col items-center'>
            <h1 className='text-3xl w-1/2 mb-20'>Edit Product</h1>
            <input
                type='text'
                onChange={(e) => setImg(e.target.value)}
                value={image}
                placeholder='Image Link'
                className='border-2 border-transparent hover:border-blue-800 w-1/2 text-xl bg-zinc-50 rounded p-2 outline-none mb-2'
            />
            <input
                type='text'
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                placeholder='Title'
                className='border-2 border-transparent hover:border-blue-800 w-1/2 text-xl bg-zinc-50 rounded p-2 outline-none mb-2'
            />
            <div className='w-1/2 flex items-center justify-between gap-3'>
                <input
                    type='text'
                    onChange={(e) => setCategory(e.target.value)}
                    value={category}
                    placeholder='Category'
                    className='border-2 border-transparent hover:border-blue-800 w-2/4 text-xl bg-zinc-50 rounded p-2 outline-none mb-2'
                />
                <input
                    type='text'
                    onChange={(e) => setPrice(e.target.value)}
                    value={price}
                    placeholder='Price'
                    className='border-2 border-transparent hover:border-blue-800 w-2/4 text-xl bg-zinc-50 rounded p-2 outline-none mb-2'
                />
            </div>
            <textarea
                rows={5}
                onChange={(e) => setDesc(e.target.value)}
                value={description}
                placeholder='Description'
                className='border-2 border-transparent hover:border-blue-800 w-1/2 text-xl bg-zinc-50 rounded p-2 outline-none mb-10'
            ></textarea>
            <button className='w-1/2 py-3 px-3 rounded text-xl font-bold text-white bg-blue-300 hover:bg-blue-500'>
                Save Changes
            </button>
        </form>
    );
}

export default Edit;
