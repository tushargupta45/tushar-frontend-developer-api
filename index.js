// const express = require("express");
import express from "express";
import routes from "./routes/routes.js";
// const routes = require("./routes/routes");

const app = express();

app.use(express.json());
app.use("/capsules", routes);
app.listen(3000, () => {
  console.log(`Server Started at ${3000}`);
});
