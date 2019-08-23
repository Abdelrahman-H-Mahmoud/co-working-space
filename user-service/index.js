const express = require('express')
const server = express();
const app=require('./src');
const port = 3000


server.use('/',app);

server.listen(port, () => console.log(`listening on port ${port}!`))