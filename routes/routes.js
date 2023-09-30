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
  await fetch(url)
    .then((res) => res.json())
    .then((obj) => {
      res.send(obj);
    })
    .catch((err) =>
      res.status(400).send({
        message: `Error: ${err}`,
      })
    );
});

export default router;
