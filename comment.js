
// Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 3000;
// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.post('/comment', (req, res) => {
  const { name, comment } = req.body;
  if (!name || !comment) {
    return res.status(400).json({ error: 'Name and comment are required' });
  }
  // Here you would typically save the comment to a database
  console.log(`Received comment from ${name}: ${comment}`);
  res.status(200).json({ message: 'Comment received successfully' });
});
// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
// Export the app for testing
module.exports = app;
// This code sets up a simple Express.js web server that listens on port 3000.
