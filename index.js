const express = require('express');
const app = express();

// Railway sets the PORT. We must use it.
const PORT = process.env.PORT || 3000;

// Example Route 1: A basic response
app.get('/', (req, res) => {
  res.send('Node.js Server is Running for the ESP32 project!');
});

// Example Route 2: A simple health check
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
