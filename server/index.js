const express = require('express');
const morgan  = require('morgan');

const app = express();

app.use(morgan('tiny'));
app.use(express.json());

app.get('/health', (req, res, next) => {
  res.send('OK!');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server started ${port}`);
});
