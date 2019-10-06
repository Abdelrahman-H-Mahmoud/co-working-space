const coworkingSpaceRoutes = require('./coworking-space.routes');
const branchRoutes = require('./branch.routes');
const app = require('express').Router();

app.use('/coworking-space',coworkingSpaceRoutes)
app.use('/branch',branchRoutes)



module.exports = app