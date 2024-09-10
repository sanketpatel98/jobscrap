import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import scrapJob from "./service/scrapFromDescription.js";

const app = express();
const port = 3000;

// Use CORS middleware
app.use(cors());

// Parse JSON bodies
app.use(bodyParser.json());

// Define a POST endpoint for scraping
app.post("/scrap", async (req, res) => {
  try {
    await scrapJob(req.body); // Wait for scrapJob to complete
    res.status(200).send("Data received successfully!");
  } catch (error) {
    res.status(500).send("An error occurred while processing your request."); // Respond with an error status code
  }
});

// Serve the HTML file on the root URL
app.get("/", async (req, res) => {
  try {
    await scrapJob(req.body); // Wait for scrapJob to complete
    res.status(200).send("Data received successfully!");
  } catch (error) {
    res.status(500).send("An error occurred while processing your request."); // Respond with an error status code
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
