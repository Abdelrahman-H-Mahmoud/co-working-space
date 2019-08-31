const jwt = require('jsonwebtoken');
const { secert, token_expiration } = require('../../config/config')

function generateToken(data) {
    return  jwt.sign({
        data
    }, secert, { expiresIn: token_expiration });
}


module.exports = {
    generateToken
}