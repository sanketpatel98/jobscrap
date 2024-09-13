import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import jobRouter from './jobscrap.js';
import coverLetterRouter from './coverLetter.js';

const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(join(__dirname, "../public")));
app.use(bodyParser.json());
app.use(cors());
app.use(jobRouter);
app.use(coverLetterRouter);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
