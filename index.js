'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Welcome to the version control tutorial. Enjoy exploring!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});