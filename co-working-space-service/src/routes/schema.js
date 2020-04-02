const Joi = require('@hapi/joi');

const schemas = {
    coworking_space_register: Joi.object().keys(
        {
            coworking_space: {
                name: Joi.string().required(),
                description: Joi.string().optional(),
                logo: Joi.string().optional(),
                cover_photo: Joi.string().optional(),
                user_id:Joi.string().required(),
            }
        }
    ),
    branch_register: Joi.object().keys(
        {
            branch: {}
        }
    ),
};


module.exports = schemas;