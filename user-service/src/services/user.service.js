
const { UserRepo } = require('../repositories');

class UserService {
    constructor() {
        this.userRepo = new UserRepo();
    }

    addUser(user){
        return this.userRepo.add(user);
    }

    findAll (){
        return this.userRepo.findAll();
    }

}

module.exports=UserService;