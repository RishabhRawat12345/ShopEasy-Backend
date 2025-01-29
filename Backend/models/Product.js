const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  imageUrl: { type: String, required: true }, // The file path of the uploaded image
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
