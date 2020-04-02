const app = require('express').Router();
const BranchService = require('../services/branch.service');
const schemas = require('./schema');
const { validate: validateBody, authorize } = require('./middlewares');

const branchService = new BranchService();

app.use(authorize);


app.get('/', async (req, res) => {
    try {
        const branches = await branchService.getBranches();
        return res.json({ data: branches });
    } catch (err) {
        return res.status(500).json({ message: "Internal Server Error" });
    }

});

app.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const branch = await branchService.getBranch(id)
        return branch ? res.json({ data: branch })
            : res.status(404).json({ message: "Not Found" });
    } catch (err) {
        return res.status(500).json({ message: "Internal Server Error" });
    }
});


app.post('/', async (req, res) => {
    const { branch } = req.body;
    try {
        const addedBranch = await branchService.addBranch(branch);
        return res.json({ data: addedBranch });
    } catch (err) {
        return res.status(500).json({ message: "Internal Server Error" });
    }
});

module.exports = app
