import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Men = () => {
  const [Product,Setproduct]=useState([]);
  const fetchdata = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products?limit=50");
      console.log(response.data);
  
      // Filter for men's clothing
      const menProducts = response.data.filter(product => 
        product.category && product.category.toLowerCase().includes("men") ||
        product.name && product.name.toLowerCase().includes("men")
      );
  
      
      // const womenProducts = response.data.filter(product => 
      //   product.category && product.category.toLowerCase().includes("women") ||
      //   product.name && product.name.toLowerCase().includes("women")
      // );
  
      Setproduct(menProducts);  
  
    } catch (error) {
      console.log("Error fetching products:", error);
    }
  };
  
  useEffect(()=>{
    fetchdata();
  },[])
  return (
    <div className=" p-8 rounded-lg shadow-lg">
  <h1 className="text-4xl font-semibold text-center text-green-600 mb-8"> Mens Collection</h1>
  <ul className="flex justify-center items-center gap-8 flex-wrap">
    {Product.map((product, index) => (
      <li key={index} className="flex flex-col items-center bg-white p-5 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 w-64 h-80">
        <img
          src={product.image}
          alt={product.title || 'Product Image'}
          className="w-32 h-32 object-cover mb-4 rounded-lg border-2 border-gray-200"
        />
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{product.title || 'Unnamed Product'}</h2>
        <p className="text-lg text-gray-600">Price: Rs {product.price || 'N/A'}</p>
      </li>
    ))}
  </ul>
</div>
  )
}

export default Men