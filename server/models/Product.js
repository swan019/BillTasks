const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  brand: String,
  supplier: String,
  category: String,
  oldStock: Number,
});

module.exports = mongoose.model('Product', productSchema);
