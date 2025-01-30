import React, { useState } from 'react';
import axios from 'axios';

const Adddata = () => {
  // State for input values
  const [ProductName, setProductName] = useState('');
  const [ProductImg, setProductImg] = useState('');
  const [ProductCost, setProductCost] = useState('');
  const [ProductDiscount, setProductDiscount] = useState('');
  const [finalPrice, setFinalPrice] = useState('');

  // State to store the saved product
  const [savedProduct, setSavedProduct] = useState(null);

  // Handle form submission
  
  
  const fetchdata = async (e) => {
    e.preventDefault();
  
    // Check if ProductImg is populated before sending
    console.log("Product Image URL before submit:", ProductImg); // This should show the image URL
  
    const discountAmount = (ProductCost * ProductDiscount) / 100;
    const calculatedFinalPrice = ProductCost - discountAmount;
    setFinalPrice(calculatedFinalPrice);
  
    const productData = {
      name: ProductName,
      price: ProductCost,
      discount: ProductDiscount,
      finalPrice: calculatedFinalPrice,
      img: ProductImg,  // Ensure this is populated and passed to the backend
    };
  
    console.log("Product data being sent to backend:", productData); // Log the data being sent
  
    try {
      const response = await axios.post('https://full-stackproject-wk3s.onrender.com/api/products/add', productData);
      console.log("Response from server:", response.data);
      setSavedProduct(response.data.savedProduct);
      alert('Product added successfully!');
    } catch (error) {
      console.error("Error adding product:", error);
      alert('Failed to add product.');
    }
  };
  
  return (
    <div className="flex justify-center items-center mt-20 p-4">
      <form className="w-full max-w-2xl p-6 border-2 border-black rounded-lg shadow-lg bg-white" onSubmit={fetchdata}>
        <h2 className="text-2xl font-bold text-black text-center mb-6">Add New Product</h2>

        <div className="flex flex-col space-y-4">
          {/* Product Name Input */}
          <div>
            <label className="text-black text-sm font-semibold" htmlFor="productName">Enter the product Name</label>
            <input
              type="text"
              id="productName"
              name="productName"
              value={ProductName}
              onChange={(e) => setProductName(e.target.value)}
              className="p-2 mt-2 text-black bg-white rounded border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter product name"
            />
          </div>

          {/* Product Image Input */}
          <div>
            <label className="text-black text-sm font-semibold" htmlFor="productImage">Enter the product Image URL</label>
            <input
              type="text"
              id="productImage"
              name="productImage"
              value={ProductImg}
              onChange={(e) => setProductImg(e.target.value)}
              className="p-2 mt-2 text-black bg-white rounded border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter product image URL"
            />
          </div>

          {/* Product Cost and Discount Inputs */}
          <div className="flex space-x-4">
            <div className="flex-1">
              <label className="text-black text-sm font-semibold" htmlFor="productCost">Enter the product cost</label>
              <input
                type="number"
                id="productCost"
                name="productCost"
                value={ProductCost}
                onChange={(e) => setProductCost(Number(e.target.value))}
                className="p-2 mt-2 text-black bg-white rounded border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter product cost"
              />
            </div>
            <div className="flex-1">
              <label className="text-black text-sm font-semibold" htmlFor="discount">Apply any discount (%)</label>
              <input
                type="number"
                id="discount"
                name="discount"
                value={ProductDiscount}
                onChange={(e) => setProductDiscount(Number(e.target.value))}
                className="p-2 mt-2 text-black bg-white rounded border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter discount percentage"
              />
            </div>
          </div>

          {/* Total Price */}
          <div>
            <label className="text-black text-sm font-semibold" htmlFor="totalPrice">Total Price</label>
            <input
              type="text"
              id="totalPrice"
              name="totalPrice"
              value={finalPrice}
              readOnly
              className="p-2 mt-2 text-black bg-white rounded border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Total price after discount"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-6 rounded-full text-white bg-red-500 w-full py-2 text-lg font-semibold hover:bg-red-600 transition-all"
          >
            Submit
          </button>
        </div>
      </form>

      
    </div>
  );
};

export default Adddata;
