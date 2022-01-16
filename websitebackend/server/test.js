// this test file is specifically being used to to demonstrate the different ways we can work with data.

// Import models
var models = require("./server.js").models;

// POPULATING OUR DATABASE:
// var toSave = [
//     {"name": "Cris5", "email" : "cris5@cris.com"},
//     {"name": "No Cris", "email" : "cris99@cris.com"},
//     {"name": "Totally No Cris", "email" : "cris99@cris.com"},
//     {"name": "Cris but no the one you know", "email" : "cris999@cris.com"},
//     {"name": "Cris5", "email" : "cris5@cris.com"},
//     {"name": "Qwer", "email" : "qwer@cris.com"},
//     {"name": "Asdf", "email" : "asdf@cris.com"},
//     {"name": "Zxcv", "email" : "zxcv@cris.com"},
//     {"name": "Uiop", "email" : "uiop@cris.com"},
//     {"name": "Jklh", "email" : "jklh@cris.com"},  
//     {"name": "Tygh", "email" : "tygh@cris.com"},
// ];

// toSave.map(obj => {
//     models.Profile.create(obj, (err, created) => {
//         console.log("Created? ", created );
//     })
// })

// git commit -m "" :
// database populated using the commented script. Data created, and saved using toSave function. Operative

var fileter = {
    where : {},
    order: "date ASC",
    limit: 3,
}

models.Profile.findOne({where:{name: "Chris"}, oder: "id DESC"}, (err, found) => {
    console.log("Found?", err, found);
})