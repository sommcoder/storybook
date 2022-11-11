const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const pug = require("pug");
const connectDB = require("./config/db");

// load config
dotenv.config({ path: "./config/config.env" });

connectDB();

const app = express();

// set pug as the view engine
app.set("view engine", "pug");

// static folder
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/", require("./routes/index"));

// if we're in development mode, log
if (process.env.NODE_ENV === "development") app.use(morgan("dev"));

const PORT = process.env.PORT || 3000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
