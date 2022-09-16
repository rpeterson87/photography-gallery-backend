const express = require("express")
const router = express.Router()
const Photography = require('../models/Photography')

///////////////////////////////
// ROUTES
////////////////////////////////

// Photography Index Route
router.get('/', async (req, res) => {
    try {
        res.status(200).json(await Photography.find({}))
    }catch(error){
        res.status(200).json(error)
    }
})

// Photography Post Route
router.post('/', async (req, res) => {
    try {
        res.status(201).json(await Photography.create(req.body))
    }catch(error){
        res.status(201).json(error)
    }
})

// Photography Show Route
router.get('/:id', async (req, res) => {
    try {
        res.json(await Photography.findById(req.params.id))
    }catch(error){
        res.status(400).json(error)
    }
})

// Photography Update Route
router.put('/:id', async (req, res) => {
    try {
        res.json(await Photography.findByIdAndUpdate(req.params,id, req.body, {new:true}))
    }catch(error){
        res.status(400).json(error)
    }
})

// Photography Delete Route
router.delete('/:id', async (req, res) => {
    try {
        res.json(await Photography.findByIdAndRemove(req.params.id))
    }catch(error){
        res.status(400).json(error)
    }
})

module.exports = router
