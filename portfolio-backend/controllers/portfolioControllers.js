const Project = require('../models/portfolioModels')
const fs = require('fs');
const path = require('path');

// Get all projects
const getProjects = async (req, res) => {

    try {
        const projects = await Project.find({});
        const formattedProjects = projects.map(project => ({
            _id: project._id,
            title: project.title,
            desc: project.desc,
            category: project.category,
            technologies: project.technologies,
            // Add any other fields...
            image: {
                data: project.image.data.toString('base64'),
                contentType: project.image.contentType
            },
            liveLink: project.liveLink,
            githubLink: project.githubLink
        }));

        res.status(200).json(formattedProjects);
        console.log('Data: ', formattedProjects);
    } catch (error) {
        console.log(error); 
    }
}

// Add new project to db
const addProject = async (req, res) => {
    try {
        const { title, category, desc, technologies, liveLink, githubLink} = req.body;

        const imageData = fs.readFileSync(path.join(__dirname + '../../uploads/' + req.file.filename));

        console.log(title, category, desc, technologies, liveLink, githubLink);
        
        const projectInfo = {
            title, 
            image: {
                data: imageData,
                contenttype: 'image/png'
            },
            category,
            desc,
            technologies,
            liveLink,
            githubLink
        }; 
    
        const project = await Project.create(projectInfo);
        res.status(200).json(project);
    } catch (error) {
        console.log(error);
        // res.status(404).json(error);
    }
}

module.exports = {
    getProjects,
    addProject
}