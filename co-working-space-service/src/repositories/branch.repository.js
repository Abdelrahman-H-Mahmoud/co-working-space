const BranchModel = require('../models/Branch.model');

class BranchRepo {

    add(branch) {
        const newBranch = new BranchModel(branch);
        return newBranch.save();
    }

    update(id, branch) {
        return BranchModel.findByIdAndUpdate(id, branch);
    }

    findAll() {
        return BranchModel.find({});
    }

    find(query = {}) {
        return BranchModel.find(query);
    }

    findOne(id) {
        return BranchModel.findById(id);
    }

    delete(id) {
        return BranchModel.findByIdAndDelete(id);
    }
}

module.exports = BranchRepo

