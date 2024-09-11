import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import scrapJob from '../service/scrapFromDescription.js';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const app = express();
const port = 3000;

// Resolve __dirname equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Serve static files from the 'public' directory, which is at the same level as 'api'
app.use(express.static(join(__dirname, '../public')));

// Use CORS middleware
app.use(cors());

// Parse JSON bodies
app.use(bodyParser.json());

// Define a POST endpoint for scraping
app.post('/scrap', async (req, res) => {
  try {
    const dataToReturn = await scrapJob(req.body); // Wait for scrapJob to complete
    res.status(200).send(dataToReturn);
  } catch (error) {
    res.status(500).send('An error occurred while processing your request.'); // Respond with an error status code
  }
});

// Serve the HTML file on the root URL
app.get('/', (req, res) => {
  res.sendFile(join(__dirname, '../public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
