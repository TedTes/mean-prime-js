const express = require("express");
const app = express();
const cors = require("cors");
const getAllPrimesToNumber = require("./getAllPrimesToNumber");
const getMedianPrimeNumbers = require("./getMedianPrimeNumbers");

const PORT = 4000;
app.use(cors());
app.get("/", (req, res) => {
  let number = req.query.number;
  let nums = getAllPrimesToNumber(number);
  let medianPrimes = getMedianPrimeNumbers(nums);
  res.json(medianPrimes);
});

module.exports = app.listen(PORT, () => {
  console.log(`server started running on ${PORT}`);
});
