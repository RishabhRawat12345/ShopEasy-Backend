const Product = require("../models/Product");

exports.addProducts = async (req, res) => {
  try {
    const { name, price, discount, finalPrice, img } = req.body;
    console.log("Received image URL:", img);  // Log the image URL received

    if (!name || !price || !discount || !finalPrice || !img) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const product = new Product({
      name,
      price,
      discount,
      finalPrice,
      imageUrl: img,  // Save the image URL correctly
    });

    const savedProduct = await product.save();

    res.status(201).json({
      message: 'Product successfully saved',
      savedProduct: savedProduct,
      imageUrl: img,
    });
  } catch (error) {
    console.error('Error adding product:', error);
    res.status(500).json({ error: 'An error occurred while adding the product' });
  }
};


exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find(); // Retrieve all products from the database

    // Map the products to return relevant data
    const mappedProducts = products.map(product => ({
      name: product.name,
      price: product.price,
      imageUrl: product.imageUrl ? product.imageUrl : null, // Correctly access imageUrl from the DB
    }));

    res.status(200).json({
      message: "Products fetched successfully",
      data: mappedProducts, // Send the mapped product data
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'An error occurred while fetching products' });
  }
};
