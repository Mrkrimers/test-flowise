const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const flowise = require('./controller/flowise.controller')

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/flowise', flowise)

app.use((err, req, res, _next) => res.send(err.message));

module.exports = app;