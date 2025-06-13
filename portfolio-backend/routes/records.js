const express = require('express');
const db = require('../db/connection.js');
const route = express.Router();



route.get('/', async (req,res) =>{
    try {
        let collection = await db.collection('projects');
        let results = await collection.find({}).toArray();
        res.send(results).status(200);    
    } catch (error) {
        res.send(error).status(404);
    }
    
})


module.exports = route;