const express = require("express");
const app = express();
// const url = "postgres://wxinvkdg:CGsVawzhAN_mf6ORkR_ABFzK8XJOyfN3@chunee.db.elephantsql.com/wxinvkdg"

const cors = require('cors');

const creds = require("./db");

const PORT = 3001;

app.use(express.json());
app.use(cors());

//CREATE: USER
app.post("/create_user", (req,res) => {
    creds.connect(async() => {
    try{
        const data = await creds.query(`INSERT INTO users(user_name, password) VALUES ('${req.body.user_name}','${req.body.password}')`)
        res.send(`Inserted New user with ${req.body.user_name} ${req.body.password}`);
        // console.log(res.send);
    }catch(err){
        res.send(err);
    };
});
    
});

// Read  SELECT * info: USER
app.get("/read_user", (req,res) => {
    try{
        creds.connect(async() => {
        const data = await creds.query(`SELECT * FROM users`);
        res.send (data);    
            });
    }catch(err){
res.send(err);
    };
    
});

//UPDATE: USER
// app.put("/update_user", (req,res) => {
//     try{
//         creds.connect(async() => {
//         const data = await creds.query(`UPDATE users(user_name, password) VALUES ('${req.body.user_name}','${req.body.password}')`)
//         res.send(`Updated New user with ${req.body.user_name} ${req.body.password}`);    
//             });
//     }catch(err){
// res.send(err);
//     };
//     console.log(res.send);
// });

// //DELETE: USER
// app.delete("/delete_user", (req,res) => {
//     try{
//         creds.connect(async() => {
//         const data = await creds.query(`DELETE FROM users(user_name, password) VALUES ('${req.body.user_name}','${req.body.password}')`)
//         res.send(`User has been deleted`);
//         console.log(res.send);
//             });
//     }catch(err){
// res.send(err);
// };

// });
app.listen(PORT, console.log(`Listening on port ${PORT}`));