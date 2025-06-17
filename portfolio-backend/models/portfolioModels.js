const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const portfolioSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
   
    category: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    technologies: {
        type: Array,
        required: true
    },
    liveLink: {
        type: String,
        required: true
    },
    githubLink: {
        type: String,
        required: true
    }
})


module.exports = mongoose.model('Project', portfolioSchema)