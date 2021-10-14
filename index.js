const express = require('express');
const routerApi = require('./routes');
const cors = require('cors');

const {
  errorHandler,
  boomErrorHandler,
} = require('./middlewares/errorHandler');

const app = express();
const port = 3000;

app.use(express.json());

const whiteList = ['http://127.0.0.1:5500', 'https://myapp.co'];
const corsOptions = {
  origin: (origin, callback) => {
    if (whiteList.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('No permission'));
    }
  },
};

app.use(cors(corsOptions));

app.get('/home', (req, res) => {
  res.send('Home');
});

routerApi(app);

app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Running on ${port}`);
});
