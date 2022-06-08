const express = require('express');
const apiRouter = express.Router();

const usersRouter = require('./users');
const postRouter = require('./posts');
const tagRouter = require('./tags')
apiRouter.use('/users', usersRouter);
apiRouter.use('/posts', postRouter);
apiRouter.use('/tags', tagRouter);

module.exports = apiRouter;