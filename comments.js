// Create web server
const express = require('express');
const app = express();
// Create a port
const port = 3000;

// Create a function to get the comments
app.get('/comments', (req, res) => {
  console.log('GET request to comments');
  res.send('GET request to comments');
});

// Create a function to post the comments
app.post('/comments', (req, res) => {
  console.log('POST request to comments');
  res.send('POST request to comments');
});

// Create a function to update the comments
app.put('/comments', (req, res) => {
  console.log('PUT request to comments');
  res.send('PUT request to comments');
});

// Create a function to delete the comments
app.delete('/comments', (req, res) => {
  console.log('DELETE request to comments');
  res.send('DELETE request to comments');
});

// Listen to the port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});