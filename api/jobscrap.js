import { Router } from "express";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { getJobMetaData } from "../controller/scrapController.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const router = Router();

router.post("/filldata", async (req, res) => {
  try {
    const dataToReturn = await getJobMetaData(req.body);
    res.status(200).send(dataToReturn);
  } catch (error) {
    res.status(500).send("An error occurred while processing your request.");
  }
});
router.get("/fill", (req, res) => {
  res.sendFile(join(__dirname, "../public", "index.html"));
});

export default router;
