const app = require('express').Router();
const Joi = require('@hapi/joi');
const UserService = require('../services/user.service');

app.post('/', async (req, res) => {
    let user = req.body.user;
    const schema = Joi.object().keys(
        {

            name: Joi.string().required(),
            mobile: Joi.string().required(),
            email: Joi.string().required(),
            password: Joi.string().required()

        }
    );

    const result = schema.validate(user);
    if (result.error) {
        res.status(400).json({ message: "validation error" })

    }

    let userService = new UserService();
    try {
        await userService.addUser(user);
        res.status(200).json({ message: "user added successfully" });
    }
    catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
});

module.exports = app
