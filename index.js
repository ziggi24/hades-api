const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const session = require('express-session');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

const { PORT } = process.env;

const controllers = require('./controllers');

app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', controllers.api);
app.use('/', controllers.main);

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});