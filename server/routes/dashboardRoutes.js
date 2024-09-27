const express = require('express');
const router = express.Router();
const Bill = require('../models/Bill'); // Assuming you have a Bill model

router.get('/totals', async (req, res) => {
  try {
    // Total number of sales (number of bills)
    const totalSales = await Bill.countDocuments();
    
    // Total revenue (sum of all bills' totalAmount)
    const totalRevenue = await Bill.aggregate([
      { $group: { _id: null, totalRevenue: { $sum: "$totalAmount" } } }
    ]);

    res.status(200).json({
      totalSales,
      totalRevenue: totalRevenue[0]?.totalRevenue || 0
    });
  } catch (err) {
    res.status(500).json({ message: 'Server Error', error: err.message });
  }
});

module.exports = router;
