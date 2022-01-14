// this test file is specifically being used to to demonstrate the different ways we can work with data.

// Import models
var models = require("./server.js").models;

models.Profile.findOrCreate({name: "Chris2"}, (err, profile) => {
    console.log("data?", err, profile);
})