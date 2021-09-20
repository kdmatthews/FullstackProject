const Pool = require("pg").Pool;
const creds = new Pool({
    host:"postgres://wxinvkdg:CGsVawzhAN_mf6ORkR_ABFzK8XJOyfN3@chunee.db.elephantsql.com/wxinvkdg",
    port: 5432,
    database:"Sea World",
    user: "wxinvkdg",
    password: "CGsVawzhAN_mf6ORkR_ABFzK8XJOyfN3",

});

module.exports = creds;