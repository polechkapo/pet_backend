const path = require('path');
const express = require('express');
const morgan = require('morgan');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const cookieParser = require('cookie-parser');
const ReactSsr = require('../middlewares/reactssr');

const sessionConfig = {
  store: new FileStore(),
  name: 'user_sid',
  secret: process.env.SESSION_SECRET ?? 'htfjg&23534!',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 12,
    httpOnly: true,
  },
};

const config = (app) => {
  app.use(express.static(path.join(__dirname, '../public')));
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(cookieParser());
  app.use(session(sessionConfig));
  app.use(morgan('dev'));
  app.use(ReactSsr);
};

module.exports = config;
