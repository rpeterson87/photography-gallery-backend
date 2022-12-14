///////////////////////////////
// DEPENDENCIES
////////////////////////////////
require("dotenv").config();
const { PORT, MONGODB_URI } = process.env;
const express = require("express");
const app = express();

// Add in mongoose
// My controllers
const photographyController = require('./controllers/photography-controller');
const userController = require('./controllers/auth-controller');
const mongoose = require("mongoose");
// Cors and morgan
const cors = require("cors");
const morgan = require("morgan");
///////////////////////////////
// DATABASE CONNECTION
////////////////////////////////
mongoose.connect(MONGODB_URI);

// Connection Events
mongoose.connection
  .on("open", () => console.log("Mic check One Two"))
  .on("close", () => console.log("Your are disconnected from mongoose :'("))
  .on("error", (error) => console.log(error));


///////////////////////////////
// MIDDLEWEAR
////////////////////////////////
app.use(express.json()); // Pares json
app.use(cors());
app.use(morgan("dev"));
app.use('/photography', photographyController);
app.use('/auth', userController);
///////////////////////////////
// ROUTES
////////////////////////////////
app.get('/', (req, res) => {
  res.send(`Testing, testing...Is this thing on?`)
});


///////////////////////////////
// LISTENER
////////////////////////////////
app.listen(PORT, () => console.log(`I feel so alive... 😀😀😀`));