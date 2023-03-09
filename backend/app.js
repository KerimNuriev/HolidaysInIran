/* eslint-disable no-console */
require('@babel/register');
const express = require('express');

const app = express();

const PORT = process.env.PORT ?? 4000;

// config(app);

app.listen(PORT, () => {
  console.log(`Server started at ${PORT}, port `);
});
