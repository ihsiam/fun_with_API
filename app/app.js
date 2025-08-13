require('dotenv').config();
const express = require('express');
const middleware = require('./middleware');
const router = require('./routes');
const { notFoundHandler, errorhandler } = require('./error');

const app = express();

app.use(middleware);
app.use(router);

app.use(notFoundHandler);
app.use(errorhandler);

module.exports = app;
