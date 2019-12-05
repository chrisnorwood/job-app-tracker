require('dotenv').config()
const express = require('express');
const helmet = require('helmet');
const morgan  = require('morgan');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(helmet());
app.use(express.json());
app.use(morgan('tiny'));

app.get('/health', (req, res, next) => {
  res.status(200).json({ status: 'OK!'});
});

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
