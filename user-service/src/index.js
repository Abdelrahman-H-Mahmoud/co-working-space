const app=require('express').Router();
const bodyParser=require('body-parser');

app.use(bodyParser.json());


module.exports=app;