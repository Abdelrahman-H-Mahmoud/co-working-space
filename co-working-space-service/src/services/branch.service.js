const { BranchRepo } = require('../repositories');
const _ = require('lodash');

const branchRepo = new BranchRepo();


class BranchService {

    addBranch(branch) {
        return branchRepo.add(branch);
    }

    getBranch(id) {
        return branchRepo.findOne(id);
    }
    getBranches() {
        return branchRepo.findAll();
    }
}


module.exports = BranchService;