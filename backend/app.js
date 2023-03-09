/* eslint-disable no-console */
require('@babel/register');
const express = require('express');
const config = require('./config/serverConfig');

const app = express();

const PORT = process.env.PORT ?? 4000;

config(app);

// app.use('/', router)

app.listen(PORT, () => {
  console.log(`Server started at ${PORT}, port `);
});
