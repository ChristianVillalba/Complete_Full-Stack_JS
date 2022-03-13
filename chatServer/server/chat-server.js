const WebSocket = require("ws");
const { models } = require("./server.js");

var model = require("./server.js").models;

const ws = new WebSocket.Server({port: 8080});
// A list with the current clients connected
const clients = [];


ws.on("connection", (ws) => {

    function login(email, pass){
        models.User.login({email: email, password: pass}, (err, result) => {
        if (err) {
            ws.send(JSON.stringify({
                type: "ERROR",
                error: err
            }));
        } else {
            models.User.findOne({where: {id: result.userId}, include: "Profile"}, (err2, user) => {
                if (err2) {
                    ws.send(JSON.stringify({
                        type: "ERROR",
                        error: err2
                    }));
                } else {

                    // creates an user Object
                    const userObject = {
                        id: user.id,
                        email: user.email,
                        ws: ws,
                    }

                    // We add the user Object to our list with the current clients connected
                    clients.push(userObject);

                    ws.send(JSON.stringify({
                        type: "LOGGEDIN",
                        data: {
                            session: result,
                            user: user
                        }
                    }))
                }
            })
        }
    })
}

    ws.on("message", (message) => {
        console.log("Got a message", JSON.parse(message));
        let parsed = JSON.parse(message);
        if (parsed) {
            switch (parsed.type){
                case "SIGNUP":
                    models.User.create(parsed.data, (err, user) => {
                        if (err){
                            ws.send(JSON.stringify({
                                type: "ERROR",
                                error: err
                            }));
                        } else {
                            models.Profile.create({
                                userId: user.id,
                                name: parsed.data.name,
                                email: parsed.data.email
                            }, (profileError, Profile) => {

                            }
                            )
                        }

                    })
                case "LOGIN":
                    login(parsed.data.email, parsed.data.password);
                case "SEARCH":
                    console.log("Searching for:", parsed.data);
                    models.User.find({where: {email: {like: parsed.data}}}, (err2, users) => {
                        if (!err2 && users){
                            ws.send(JSON.stringify({
                                type: "GOT_USERS",
                                data: {
                                    users: users
                                }
                            }))
                        }
                    })
                default:
                    console.log("Nothing to see here");
            }
        }
    });
})