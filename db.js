const Pool = require("pg").Client;
const creds = new Pool("postgres://wxinvkdg:CGsVawzhAN_mf6ORkR_ABFzK8XJOyfN3@chunee.db.elephantsql.com/wxinvkdg")
//     port: 5432,
//     database:"sea_world",
//     user: "wxinvkdg",
//     password: "CGsVawzhAN_mf6ORkR_ABFzK8XJOyfN3",

// });

// wxinvkdg
// CGsVawzhAN_mf6ORkR_ABFzK8XJOyfN3
module.exports = creds;