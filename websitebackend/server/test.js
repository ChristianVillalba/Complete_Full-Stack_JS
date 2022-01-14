// this test file is specifically being used to to demonstrate the different ways we can work with data.

// Import models
var models = require("./server.js").models;

models.Profile.findOrCreate({name: "Chris2"}, (err, profile) => {
    if(err){
        console.log("Tere was an error", err);
    }else if(profile){
        profile.email= "chris@chrisvilla2.com";
        profile.save((ue, updated) => {
            console.log("Updated?", updated);
        });
    }
})