const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// Middleware
app.use(bodyParser.json());

// Mock data for bills
let bills = [
  {
    month: "August",
    year: 2023,
    user: "demo1",
    totalCost: 4.31,
    details: [
      { api: "API1", token: "token1", usage: 500, pricePerSecond: 0.01 },
      { api: "API2", token: "token1", usage: 1000, pricePerSecond: 0.005 },
    ],
  },
];

// Route to get bills
app.get("/bills", (req, res) => {
  res.json(bills);
});

// Error handler middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
