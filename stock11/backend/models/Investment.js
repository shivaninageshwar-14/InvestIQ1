// backend/models/Investment.js
const mongoose = require('mongoose');

const investmentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  stockName: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
  totalAmount: { type: Number, required: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Investment', investmentSchema);
