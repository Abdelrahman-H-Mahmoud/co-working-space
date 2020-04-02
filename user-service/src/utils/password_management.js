const bcrypt = require('bcrypt');

const SALT_ROUNDS = 10;

function hash(password) {
    return bcrypt.hash(password, SALT_ROUNDS);
}

function compare(password, hashed_password) {
    return bcrypt.compare(password,hashed_password);
}

module.exports = {
    hash,
    compare
}