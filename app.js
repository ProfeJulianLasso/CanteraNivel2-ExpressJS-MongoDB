const path = require('path');
const logger = require('morgan');
const express = require('express');
const mongoose = require("mongoose");
const cookieParser = require('cookie-parser');

const mongodb = 'mongodb://localhost/cantera2';
mongoose.connect(mongodb, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));
app.use('/user', require('./routes/create-user'));
app.use('/user', require('./routes/delete-user'));
app.use('/user', require('./routes/total-change-user'));
app.use('/user', require('./routes/partial-change-user'));

module.exports = app;
