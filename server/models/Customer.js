const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  gender: String,
  contact: String,
  email: String,
});

module.exports = mongoose.model('Customer', customerSchema);
