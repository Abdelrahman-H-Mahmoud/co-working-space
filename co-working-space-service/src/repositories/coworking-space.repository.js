const CoworkingSpaceModel = require('../models/coworking-space.model');

class CoworkingSpaceRepo {

    add(coSpace) {
        const newCoworkingSpace = new CoworkingSpaceModel(coSpace);
        return newCoworkingSpace.save();
    }

    update(id, coSpace) {
        return CoworkingSpaceModel.findByIdAndUpdate(id, coSpace);
    }

    findAll() {
        return CoworkingSpaceModel.find({});
    }

    find(query = {}) {
        return CoworkingSpaceModel.find(query);
    }

    findOne(id) {
        return CoworkingSpaceModel.findById(id);
    }

    delete(id) {
        return CoworkingSpaceModel.findByIdAndDelete(id);
    }
}

module.exports = CoworkingSpaceRepo

