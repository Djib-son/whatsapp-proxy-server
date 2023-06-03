const express = require('express');
const request = require('request');

const app = express();

const PORT = process.env.PORT || 3000;

app.use('/', (req, res) => {
  const url = 'https://web.whatsapp.com' + req.url;
  req.pipe(request(url)).pipe(res);
});

app.listen(PORT, () => {
  console.log(`Proxy server is running on port ${PORT}`);
});
