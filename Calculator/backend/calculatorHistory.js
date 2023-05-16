const mongoose = require("mongoose");

const calculatorHistorySchema = new mongoose.Schema({
  expression: {
    type: String,
    required: true,
  },
  result: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const CalculatorHistory = mongoose.model(
  "CalculatorHistory",
  calculatorHistorySchema
);

module.exports = CalculatorHistory;
