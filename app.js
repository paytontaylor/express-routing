const express = require("express");
const ExpressError = require("./expressError");
const dotenv = require("dotenv");
const { mean, median, mode, convertToNumArrAndValidate } = require("./helpers");

const app = express();
dotenv.config();
const PORT = process.env.PORT;

app.use(express.json());

app.get("/mean", (req, res, next) => {
  try {
    const { nums } = req.query;
    if (!nums) throw new ExpressError("Please input a query string of comma separated numbers", 400);

    const numArrOfStrings = nums.split(",");
    let numArr = convertToNumArrAndValidate(numArrOfStrings);

    if (numArr instanceof Error) {
      throw new ExpressError(numArr.message);
    }

    return res.send({response: { operation: "mean", value: mean(numArr) }})
  } catch (err) {
    next(err)
  }
});

app.get("/median", (req, res, next) => {
  try {
    const { nums } = req.query;
    if (!nums) throw new ExpressError("Please input a query string of comma separated numbers", 400)

    const numArrOfStrings = nums.split(",");
    const numArr = convertToNumArrAndValidate(numArrOfStrings);

    if (numArr instanceof Error) {
      throw new ExpressError(numArr.message)
    }

    return res.send({response: { operation: "median", value: median(numArr) }})
  } catch (err) {
    next(err)
  }
});

app.get("/mode", (req, res, next) => {
  try {
    const { nums } = req.query;
    if (!nums) throw new ExpressError("Please input a query string of comma separated numbers", 400);

    const numArrOfStrings = nums.split(",");
    const numArr = convertToNumArrAndValidate(numArrOfStrings);

    if (numArr instanceof Error) {
      throw new ExpressError(numArr.message);
    }

    return res.send({response: { operation: "mode", value: mode(numArr) }})
  } catch (err) {
    next(err)
  }
})

app.use((req, res, next) => {
  const err = new ExpressError("Not Found", 404)

  next(err);
})

app.use((err, req, res, next) => {
  res.status(err.status || 500);

  return res.json({
    error: err,
    message: err.message
  });
})

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`)
})