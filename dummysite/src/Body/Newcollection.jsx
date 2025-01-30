import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Newcollection = () => {
  const [products, setProducts] = useState([]); // Initialize as an empty array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://full-stackproject-wk3s.onrender.com/api/products/getdetail');
      console.log(response.data); // Inspect API response structure
      setProducts(response.data.data || []); // Extract the array from `data` property
    } catch (err) {
      setError(err.message || 'Error fetching data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className=" p-8 rounded-lg shadow-lg">
  <h1 className="text-4xl font-semibold text-center text-green-600 mb-8">New Collection</h1>
  <ul className="flex justify-center items-center gap-8 flex-wrap">
    {products.map((product, index) => (
      <li key={index} className="flex flex-col items-center bg-white p-5 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 w-64 h-80">
        <img
          src={product.imageUrl}
          alt={product.name || 'Product Image'}
          className="w-32 h-32 object-cover mb-4 rounded-lg border-2 border-gray-200"
        />
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{product.name || 'Unnamed Product'}</h2>
        <p className="text-lg text-gray-600">Price: Rs {product.price || 'N/A'}</p>
      </li>
    ))}
  </ul>
</div>
  );
};

export default Newcollection;
