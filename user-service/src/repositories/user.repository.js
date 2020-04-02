const userModel=require('../models/user.model');

class UserRepo {

    add(user){
        const newUser=new userModel(user);
        return newUser.save();
    }

    update(id,user){
        return userModel.findByIdAndUpdate(id,user);
    }

    findAll(){
        return userModel.find({});
    }

    find (query={}){
        return userModel.find(query);
    } 

    findOne(id){
        return userModel.findById(id);
    }

    delete (id){
        return userModel.findByIdAndDelete(id);
    }
}

module.exports=UserRepo

