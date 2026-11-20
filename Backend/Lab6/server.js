const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3001;

// Helper function to read and send an HTML file using the fs module.
function sendHTML(fileName, res) {
  const filePath = path.join(__dirname, 'pages', fileName);

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading HTML file:', err);
      return res.status(500).send('<h1>500 - Unable to load page</h1>');
    }
    res.status(200).type('html').send(data);
  });
}

// Route for the home page.
app.get('/', (req, res) => {
  sendHTML('index.html', res);
});

// Route for the about page.
app.get('/about', (req, res) => {
  sendHTML('about.html', res);
});

// Route for the contact page.
app.get('/contact', (req, res) => {
  sendHTML('contact.html', res);
});

// Handle unknown routes.
app.use((req, res) => {
  res.status(404).send('<h1>404 - Page Not Found</h1>');
});

app.listen(PORT, () => {
  console.log(`Experiment 2 server is running at http://localhost:${PORT}`);
});
