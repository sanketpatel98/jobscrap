import { Router } from "express";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { getCoverLetter } from "../controller/coverLetterController.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const router = Router();

router.get("/coverletter", (req, res) => {
  res.sendFile(join(__dirname, "../public", "coverletter.html"));
});

router.post("/coverletterdatatodocs", async (req, res) => {
  try {
    const result = await getCoverLetter(req.body);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send("An error occurred while processing your request.");
  }
});
export default router;
