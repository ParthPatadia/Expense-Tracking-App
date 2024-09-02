const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;

const sequelize = require("./models");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Expense Tracker API is running...");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Sync Database
sequelize
  .sync()
  .then(() => {
    console.log("Database synced");
  })
  .catch((err) => {
    console.log("Error syncing database:", err);
  });
