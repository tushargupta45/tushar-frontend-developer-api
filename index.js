import express from "express";
import routes from "./routes/routes.js";

const app = express();

app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});
app.use("/capsules", routes);
app.listen(4500, () => {
  console.log(`Server Started at ${4500}`);
});
