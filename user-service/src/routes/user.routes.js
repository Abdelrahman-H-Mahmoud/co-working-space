const app = require('express').Router();
const UserService = require('../services/user.service');
const schemas = require('./schema');
const validateBody = require('./middlewares/validate');

app.post('/', validateBody(schemas.user_post_register), async (req, res) => {

    let userService = new UserService();
    const {user}=req.body;
    try {
        await userService.addUser(user);
        res.status(200).json({ message: "user added successfully" });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

module.exports = app
