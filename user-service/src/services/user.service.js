
const { UserRepo } = require('../repositories');
const { password_management, token_management } = require('../utils');

const _ = require('lodash');

class UserService {
    constructor() {
        this.userRepo = new UserRepo();
    }

    async addUser(user) {
        try {
            user.password = await password_management.hash(user.password);
            return this.userRepo.add(user);
        }
        catch (err) {
            Promise.reject(err);
        }
    }

    findAll() {
        return this.userRepo.findAll();
    }

    async authenticate(email, password) {
        try {
            let data = await this.userRepo.find({ 'email': email });
            if (data && data.length) {
                let user = data[0];
                let isIdentical = await password_management.compare(password,user.password);
                if (isIdentical)
                    return token_management.generateToken(_.omit(user, ['password']));

                throw new Error("User Not Found")
            }
            else {
                throw new Error("User Not Found")
            }
        }
        catch (error) {
            throw new UserServiceError(error.message)
        }


    }


}

class UserServiceError extends Error {
    constructor(msg) {
        super(msg);
        this.name = "User Service Error"
    }
}

module.exports = UserService;