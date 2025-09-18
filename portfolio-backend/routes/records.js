const express = require('express');
const { getProjects, addProject } = require('../controllers/portfolioControllers');
const portfolioRoutes = require('../models/portfolioModels');
const upload = require('../middleware/upload')
const router = express.Router();

router.get('/', (req, res) => {
     portfolioRoutes.find({})
    .then((data, err)=>{
        if(err){
            console.log(err);
        }
        res.render('dashboard', {data: data});
    });
})

// GET all projects
router.get('/fetch', getProjects);

// POST new project to mongodb
router.post('/upload', upload.single('image'), addProject);

module.exports = router;