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
// FILTER FUNCTION
var filter = {
    where : {
        email: {like: "cris"}
    },
    order: "date ASC",
    limit: 20,
    skip: 4,
    fields: {
        email: true,
    }
}



models.Profile.destroyById( "61e0aa948507dd8af804d843", (err, found) => {
    console.log("Found?", err, found);
})

//ready to run: node server/test.js