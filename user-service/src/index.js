const app=require('express').Router();
const bodyParser=require('body-parser');
const routes = require('./routes');
const cors=require('cors');

app.use(bodyParser.json());

app.use(cors({
    origin:"http://localhost:3001"
}))
app.use('/',routes);

module.exports=app;