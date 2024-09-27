const Bill = require('../models/Bill');

// Add a new bill
exports.addBill = async (req, res) => {
  try {
    const newBill = new Bill(req.body);
    await newBill.save();
    res.status(201).json(newBill);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Get all bills
exports.getBills = async (req, res) => {
  try {
    const bills = await Bill.find().populate('customer').populate('products');
    res.status(200).json(bills);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Update bill
exports.updateBill = async (req, res) => {
  try {
    const bill = await Bill.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(bill);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Delete bill
exports.deleteBill = async (req, res) => {
  try {
    await Bill.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Bill Deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};
