const express = require('express')
const server = express();
const app=require('./src');
const mongoose=require('mongoose');

const config=require('./config/config');

mongoose.connect(`mongodb://${config.mongoDB.user}:${config.mongoDB.password}@${config.mongoDB.host}:${config.mongoDB.port}/${config.mongoDB.db_name}?authSource=admin`,{ useNewUrlParser: true }).then(db=>{
    console.log('db connected!!!');
}).catch(err=>{
    console.log(err);
})

server.use('/',app);


server.listen(config.port, () => console.log(`listening on port ${config.port}!`));