const express = require("express");
const { createExpense, getGroupExpenses } = require("../controllers/Expense");
const router = express.Router();

router.post("/", createExpense);
router.get("/group/:groupId", getGroupExpenses);

const { minimizeTransactions } = require("../controllers/settlement");

router.post("/settle", (req, res) => {
  const debts = req.body.debts;
  const result = minimizeTransactions(debts);
  res.json(result);
});

module.exports = router;
