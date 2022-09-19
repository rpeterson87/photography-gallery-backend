///////////////////////////////
// DEPENDENCIES
////////////////////////////////
const mongoose = require("mongoose")


///////////////////////////////
// MODELS
////////////////////////////////
const PhotographySchema = new mongoose.Schema ({
    title: String,
    name: String,
    image: String,
    location: String,
    exif: String,
    digitalprice: String,
    printprice: String,
}, {timestamps: true})

const Photography = mongoose.model("Photography", PhotographySchema)

module.exports = Photography
