const Project = require('../models/portfolioModels')
// const mongoose = require('mongoose');


// Get all projects
const getProjects = async (req, res) => {

    try {
        const projects = await Project.find({});
        res.status(200).json(projects);
        console.log('Data: ', projects);
    } catch (error) {
        console.log(error); 
    }
}

const addProject = async (req, res) => {
    const {
        title, 
        image, 
        category,
        desc,
        technologies,
        liveLink,
        githubLink} = req.body;

    try {
        const project = await Project.create({ title, 
        image, 
        category,
        desc,
        technologies,
        liveLink,
        githubLink});
        res.status(200).json(project);
    } catch (error) {
        console.log(error);
    }

}

module.exports = {
    getProjects,
    addProject
}