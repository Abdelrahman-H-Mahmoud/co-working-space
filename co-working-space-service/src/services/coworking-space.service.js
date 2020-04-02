const { CoworkingSpaceRepo } = require('../repositories');
const _ = require('lodash');

const coWorkingSpaceRepo = new CoworkingSpaceRepo();


class CoworkingSpaceService {

    addCoworkingSpace(CoSpace) {
        return coWorkingSpaceRepo.add(CoSpace);
    }

    getCoworkingSpace(id) {
        return coWorkingSpaceRepo.findOne(id);
    }
}


module.exports = CoworkingSpaceService;