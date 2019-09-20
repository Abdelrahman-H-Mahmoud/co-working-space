const app = require('express').Router();
const UserService = require('../services/user.service');
const schemas = require('./schema');
const {validate:validateBody,authorize} = require('./middlewares');

const userService=new UserService();
app.post('/', validateBody(schemas.user_post_register), async (req, res) => {
    const {user}=req.body;
    try {
        await userService.addUser(user);
        res.status(201).json({ message: "user added successfully" });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

app.post('/login',validateBody(schemas.user_post_login),async (req,res)=>{
    let {email,password}=req.body.user;
    try{

        let token = await userService.authenticate(email,password);

        if(token){
            return res.json({message:"Logged In",token});
        }
        else{
            return res.status(401).json({message:"Unauthorized"});
        }

    }catch(error){
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
    
});

app.get('/',authorize,(req,res)=>{
    console.log(req.user);
    return res.send('done');
})

module.exports = app
