const express = require("express")
const router = express.Router()
const Photography = require('../models/Photography')
const { requireToken, handleValidateOwnership } = require('../middleware/auth')

///////////////////////////////
// ROUTES
////////////////////////////////

// Photography Index Route
router.get('/', async (req, res) => {
    try {
        const photography = await People.find({}).populate("owner", "username").exec();

        res.status(200).json(photography)
    }catch(error){
        res.status(400).json(error);
    }
})

// Photography Post Route
router.post('/', requireToken, async (req, res) => {
    try {
        req.body.owner = req.user._id
        // res.json(await Photography.create(req.body))
        res.status(200).json(await Photography.create(req.body))
    }catch(error){
        res.status(400).json(error)
    }
})

// Photography Show Route
router.get('/:id', async (req, res) => {
    try {
        const foundPhoto = await Photography.findById(req.params.id)
        .populate("owner")
        .exec()
        res.json(foundPhoto)
    }catch(error){
        res.status(400).json(error)
    }
})

// Photography Update Route
router.put('/:id', requireToken, async (req, res) => {
    // console.log(req.params.id, req.body)
    try {
        handleValidateOwnership(req, await Photography.findById(req.params.id))
        res.json(await Photography.findByIdAndUpdate(req.params.id, req.body, {new:true}))
    }catch(error){
        res.status(400).json({error: error.message});
    }
})

// Photography Delete Route
router.delete('/:id', requireToken, async (req, res) => {
    try {
        handleValidateOwnership(req, await Photography.findById(req.params.id))
        res.json(await Photography.findByIdAndRemove(req.params.id))
    }catch(error){
        res.status(400).json(error)
    }
})

module.exports = router
