const express = require('express');
const { getProjects, addProject } = require('../controllers/portfolioControllers');
const upload = require('../middleware/upload')
const router = express.Router();

router.get('/', (req, res) => {
    res.render('dashboard');
})

// GET all projects
router.get('/fetch', getProjects);

// POST new project to mongodb
router.post('/upload', upload.single('image'), addProject);

module.exports = router;