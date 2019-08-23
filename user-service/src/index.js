const app=require('express').Router();

app.get('/', (req, res) => res.send('Hello Fucking World!'))



module.exports=app;