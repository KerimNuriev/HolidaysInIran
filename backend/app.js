/* eslint-disable no-console */
require('@babel/register');
const express = require('express');
const config = require('./config/serverConfig');
const logoRegoRouter = require('./routes/render/logoRego.routes');
const adminRouter = require('./routes/api/admin.routes');
const cityRouter = require('./routes/api/city.routes');
const dayRouter = require('./routes/api/day.routes');
const tourRouter = require('./routes/api/tour.routes');

const app = express();

const PORT = process.env.PORT ?? 4000;

config(app);

app.use('/', logoRegoRouter);

app.use('/api/admin', adminRouter);
app.use('/api/city', cityRouter);
app.use('/api/day', dayRouter);
app.use('/api/tour', tourRouter);

app.listen(PORT, () => {
  console.log(`Server started at ${PORT}, port `);
});
