const userRoutes = require('./user.routes');
const app = require('express').Router();

app.use('/user',userRoutes)



module.exports = app