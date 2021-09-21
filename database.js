const express = require("express");
const app = express();
// const url = "postgres://wxinvkdg:K7nLI4ZVLa3UfIeds01LON96wzevUCHD@chunee.db.elephantsql.com/wxinvkdg"



const creds = require("./db");

const PORT = 3001;

app.use(express.json());


//CREATE: USER
// app.post("/create_user", (req,res) => {
//     creds.connect(async() => {
//     try{
//         const data = await creds.query(`INSERT INTO users(user_name, password) VALUES ('${req.body.user_name}','${req.body.password}')`)
//         res.send(`Inserted New user with ${req.body.user_name} ${req.body.password}`);
//         // console.log(res.send);
//     }catch(err){
//         res.send(err);
//     };
// });
    
// });

//Read  SELECT * info: USER
// app.get("/read_user", (req,res) => {
//     try{
//         creds.connect(async() => {
//         const data = await creds.query(`SELECT * FROM users`);
//         res.send (data);    
//             });
//     }catch(err){
// res.send(err);
//     };
    
// });

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
// app.delete("/delete_user/:id", (req,res) => {
//     const id = req.params.id;
//     try{
//         creds.connect(async() => {
//         const data = await creds.query(`DELETE FROM users WHERE id=8`);
//         res.send(`User has been deleted`);
//         console.log(res.send);
//             });
//     }catch(err){
// res.send(err);
// };

// });



// Read  SELECT * info: RIDES
app.get("/read_rides", (req,res) => {
    try{
        creds.connect(async() => {
        const data = await creds.query(`SELECT * FROM rides`);
        res.send (data);    
            });
    }catch(err){
res.send(err);
    };
    
});
app.listen(PORT, console.log(`Listening on port ${PORT}`));