const express = require('express');
const { getProjects, addProject } = require('../controllers/portfolioControllers');

const router = express.Router();


// route.get('/', async (req,res) =>{
//     try {
//         let collection = await db.collection('portfolio');
//         let results = await collection.find({}).toArray();
//         console.log('Data: ',results);
        
//         res.send(results).status(200);    
//     } catch (error) {
//         res.send(error).status(404);
//     }
    
// })

// GET all projects
router.get('/', getProjects);


router.post('/', addProject);

// route.get('/test', async (req,res) =>{
//     res.send("Hello PLP Coder").status(200);
// })

// This section will help you create a new record.
// route.post("/addnew", async (req, res) => {
//     const {name, position, level} = req.body;
//     try {
//         let newDocument = {
//         name,
//         position,
//         level,
//         };
//         console.log(name);
        
//         let collection = await db.collection("projects");
//         let result = await collection.insertOne(newDocument);
//         res.send(result).status(204);
//     } catch (err) {
//         console.error(err);
//         res.status(500).send("Error adding record");
//     }
// });


module.exports = router;