require('dotenv').config()
const express = require('express');
const helmet = require('helmet');
const morgan  = require('morgan');
const routes = require('./routes');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(helmet());
app.use(express.json());
app.use(morgan('tiny'));

app.use('/api', routes);

// Must export the express server to be used in my supertest/jest tests
module.exports = app;
