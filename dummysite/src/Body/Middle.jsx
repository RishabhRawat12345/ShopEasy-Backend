import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Middle = () => {
  const [menProduct, setMenProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products?limit=5");
        const filteredProducts = response.data.filter(product => product.category === 'men\'s clothing');
        setMenProduct(filteredProducts);
      } catch (error) {
        console.log("The product is not available", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='flex flex-col items-center justify-center gap-16 mt-10'>
      <h1 className='text-3xl font-bold'>Top Men's Categories</h1>
      {/* Loop through filtered menProduct and display products */}
      <div className='flex gap-8 justify-center flex-wrap'>
        {menProduct.length > 0 ? (
          menProduct.map((product) => (
            <div key={product.id} className=' border-black p-4 flex flex-col items-center justify-between w-64 h-[28rem]'>
              <img className='h-full w-full object-cover' src={product.image} alt={product.title} />
              <h2 className='text-lg font-semibold mt-4 text-black'>{product.title}</h2>
              <p className='text-sm text-center mt-2'>{product.description}</p>
            </div>
          ))
        ) : (
          <p>No products found in this category.</p>
        )}
      </div>
    </div>
  );
};

export default Middle;
