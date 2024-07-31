const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
  return res.send('Homepage');
});

app.get('/:name', (req, res) => {
  return res.send(`Echo: ${req.params.name}`);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});