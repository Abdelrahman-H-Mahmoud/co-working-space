const joi = require('@hapi/joi');

function validateSchema(schema){
    return (req,res,next)=>{
        const result = schema.validate(req.body);
        if (result.error) {
           return res.status(400).json({ message: "validation error" })
        }
        next();
    }
}


module.exports=validateSchema