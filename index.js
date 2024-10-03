const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, Sami! Welcome to your first Node.js app running on Jenkins!');
});

app.listen(port, () => {
  console.log(`App is listening at http://localhost:${port}`);
});
