const express = require("express")
const router = express.Router()
const Photography = require('../models/Photography')


///////////////////////////////
// ROUTES
////////////////////////////////

// Index Route
router.get('/', async (req, res) => {
    try {
        res.status(200).json(await Photography.find({message: "This is a test"}))
    }catch(error){
        console.log(error)
    }
})

// Photography Show Route
router.post('/', async (req, res) => {
    try {
        res.status(200).json( await Photography.create(req.body))
    }catch(error){
        console.log(error)
    }
})

module.exports = router
