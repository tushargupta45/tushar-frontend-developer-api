import express from "express";
import fetch from "node-fetch";
const router = express.Router();

//get all capsules
router.get("", async (req, res) => {
  const { launchType } = req.query;
  const query = req._parsedUrl.query ?? "";
  let launchTypeUrl = "";
  if (launchType) {
    switch (launchType) {
      case "upcoming":
        launchTypeUrl = "/upcoming";
        break;

      case "past":
        launchTypeUrl = "/past";
        break;

      default:
        break;
    }
  }
  const url = `https://api.spacexdata.com/v3/capsules${launchTypeUrl}?${query}`;
  let count = 0;
  await fetch(url)
    .then((res) => {
      count = res.headers.get("spacex-api-count");
      return res.json();
    })
    .then((obj) => {
      res.send({ results: obj, count: count });
    })
    .catch((err) =>
      res.status(400).send({
        message: `Error: ${err}`,
      })
    );
});

export default router;
