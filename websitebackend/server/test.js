// this test file is specifically being used to to demonstrate the different ways we can work with data.

// Import models
var models = require("./server.js").models;

models.Profile.upsert({id: "61e0af5b49d9be8d74ab0178",  name: "Chris1"}, (err, profile) => {
    console.log("data?", err, profile);
})