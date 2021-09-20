const express = require("express");
const app = express();
// const url = "postgres://wxinvkdg:CGsVawzhAN_mf6ORkR_ABFzK8XJOyfN3@chunee.db.elephantsql.com/wxinvkdg"



const creds = require("./db");
console.log (creds);

const PORT = 3001;

app.use(express.json());


//CREATE
app.post("/create_user", (req,res) => {
    try{
        creds.connect(async() => {
        const data = await creds.query(`INSERT INTO users(user_name, password) VALUES ('${req.body.user_name}','${req.body.password}')`)
        res.send(`Inserted New user with ${req.body.user_name} ${req.body.password}`);    
            });
    }catch(err){
res.send(err);
    };
});
//Read * info
app.get("/read_ride", (req,res) => {
    try{
        creds.connect(async() => {
        const data = await creds.query(`users(user_name, password) VALUES ('${req.body.user_name}','${req.body.password}')`)
        res.send(`${req.body.user_name} ${req.body.password}`);    
            });
    }catch(err){
res.send(err);
    };
});

// //UPDATE
// app.put("/update_ride", (req,res) => {
//     try{
//         creds.connect(async() => {
//         const data = await creds.query(`INSERT INTO users(user_name, password) VALUES ('${req.body.user_name}','${req.body.password}')`)
//         res.send(`Updated New user with ${req.body.user_name} ${req.body.password}`);    
//             });
//     }catch(err){
// res.send(err);
//     }

// //DELETE
// app.delete("/delete_ride", (req,res) => {
//     try{
//         creds.connect(async() => {
//         const data = await creds.query(`INSERT INTO users(user_name, password) VALUES ('${req.body.user_name}','${req.body.password}')`)
//         res.send(`New user has been deleted with ${req.body.user_name} ${req.body.password}`);    
//             });
//     }catch(err){
// res.send(err);
//     };
// });
// });

app.listen(PORT, console.log(`Listening on port ${PORT}`));