const express = require('express');
const app = express();
const port = 8000;
const Vigenere = require('caesar-salad').Vigenere;
const password = 'password'

app.get('/', (req, res) => {
  return res.send('Homepage');
});

app.get('/encode/:name', (req, res) => {
  return res.send(Vigenere.Cipher(password).crypt(req.params.name));
});

app.get('/decode/:name', (req, res) => {
  return res.send(Vigenere.Decipher(password).crypt(req.params.name));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});