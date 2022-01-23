'use strict';
const sharp = require("sharp");

module.exports = function(PostImage) {
    PostImage.remoteMethod(
        "upload",
        {
            description: "Uploads file",
            accepts: [
                { arg: "ctx", type: "object", http: {source: "context"}},
                { arg: "options", type: "object", http: {source: "query"}},
                { arg: "access_token", type: "string"},
                { arg: "post_id", type: "string"}
            ],
        }
    )

};
