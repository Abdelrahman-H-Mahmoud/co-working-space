const Joi=require('@hapi/joi');

const schemas = {
    user_post_register:Joi.object().keys(
        {
            user:{
                name: Joi.string().required(),
                mobile: Joi.string().required(),
                email: Joi.string().required(),
                password: Joi.string().required()
            }
        }
    ),
    user_post_login:Joi.object().keys(
        {
            user:{
                email: Joi.string().required(),
                password: Joi.string().required()
            }
        }
    )
};


module.exports =schemas;