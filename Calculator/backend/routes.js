const express = require("express");
const CalculatorHistory = require("./calculatorHistory");

const router = express.Router();

router.post("/history", async (req, res) => {
  try {
    const { expression, result } = req.body;

    const history = new CalculatorHistory({
      expression,
      result,
    });

    await history.save();

    res.sendStatus(201);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

module.exports = router;
