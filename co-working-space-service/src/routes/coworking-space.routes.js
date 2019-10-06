const app = require('express').Router();
const CoworkingSpaceService = require('../services/coworking-space.service');
const schemas = require('./schema');
const { validate: validateBody, authorize } = require('./middlewares');

const coworkingSpaceService = new CoworkingSpaceService();

app.post('/', authorize ,validateBody(schemas.coworking_space_register), async (req, res) => {
    const { coworking_space } = req.body;
    try {
        const co_space = await coworkingSpaceService.addCoworkingSpace(coworking_space);
        return res.status(201).json({ message: "Created", data: co_space });
    } catch (err) {
        return res.status(500).json({ message: "Internal Server Error" });
    }
});

app.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const coSpace = await coworkingSpaceService.getCoworkingSpace(id);
        return coSpace ? res.json({ data: coSpace })
            : res.status(404).json({ message: "Not Found" });
    } catch (err) {
        return res.status(500).json({ message: "Internal Server Error" });
    }

});

module.exports = app
