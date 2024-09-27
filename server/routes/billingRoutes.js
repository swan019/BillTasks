const express = require('express');
const router = express.Router();
const { addBill, getBills, updateBill, deleteBill } = require('../controllers/billingController');

// Routes for billing management
router.post('/', addBill);
router.get('/', getBills);
router.put('/:id', updateBill);
router.delete('/:id', deleteBill);

module.exports = router;
