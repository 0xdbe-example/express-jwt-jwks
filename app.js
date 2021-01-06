require('dotenv').config();

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const cors = require('cors');
const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
}

const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

const jwtConfig = {
    secret: jwksRsa.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: process.env.JWKS,
      }),
    audience: process.env.AUD,
    issuer: process.env.ISS,
    algorithms: ['RS256']
};

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors(corsOptions))
app.use(jwt(jwtConfig));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
