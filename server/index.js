require('dotenv').config()
const express = require('express');
const helmet = require('helmet');
const morgan  = require('morgan');

const app = express();

// Middleware
app.use(helmet());
app.use(express.json());
app.use(morgan('tiny'));

app.get('/health', (req, res, next) => {
  res.send('OK!');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server started ${port}`);
});
