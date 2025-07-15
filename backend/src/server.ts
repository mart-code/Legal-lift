// Import the 'express' module
import express from 'express';

// Create an Express application
const app = express();

// Define a route for the root path ('/')
app.get('/', (req, res) => {
  // Send a response to the client
  res.send('Hello, TypeScript + Node.js + Express!');
});

// Start the server and listen on the specified port
app.listen(process.env.PORT, () => {
  // Log a message when the server is successfully running
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});