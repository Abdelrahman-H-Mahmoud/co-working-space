const jwt = require('jsonwebtoken');
const { secert, token_expiration } = require('../../config/config')

function generateToken(data) {
    return  jwt.sign(data, secert, { expiresIn: token_expiration, });
}

function decodeToken(token){
    return jwt.verify(token,secert);
}

module.exports = {
    generateToken,
    decodeToken
}