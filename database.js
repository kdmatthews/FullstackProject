const express = require("express");
const cors = require("cors");
const app = express();
// const url = "postgres://wxinvkdg:K7nLI4ZVLa3UfIeds01LON96wzevUCHD@chunee.db.elephantsql.com/wxinvkdg"


const creds = require("./db");

const PORT = 3001;

app.use(express.json());
app.use(cors());

// CREATE: USER: GOOD2GO
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

// Read  SELECT * info: USER: GOOD2GO
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

//UPDATE: RIDE ON ITINERARY: STILL NEEDED!!!
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

// Read  SELECT * FROM: RIDES: GOOD2GO
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

// Read  UPDATE ITINERARY by id: RIDES: GOOD2GO
app.put("/update_itinerary/:id", (req,res) => {
    const id = req.params.id;
    try{
        creds.connect(async() => {
        const data = await creds.query(`SELECT * FROM rides WHERE id = ${id}`);
        for (i in data.rows){
            await creds.query(`INSERT INTO itinerary(ride_name, ride_url) VALUES ('${data.rows[0].ride_name}', '${data.rows[0].ride_url}')`)
            res.send (data); 
        };   
            });
    }catch(err){
res.send(err);
    };
    
});

// Read  SELECT * FROM: ITINERARY: GOOD2GO
app.get("/read_itinerary", (req,res) => {
    try{
        creds.connect(async() => {
        const data = await creds.query(`SELECT * FROM itinerary`);
        res.send (data);    
            });
    }catch(err){
res.send(err);
    };
});
// console.log();
//DELETE: RIDE by id FROM ITIERARY: ITINTERARY GOOD2GO
app.delete("/delete_id/:id", (req,res) => {
    const id = req.params.id;
    try{
        creds.connect(async() => {
        const data = await creds.query(`DELETE FROM itinerary WHERE id = ${id}`);
        res.send (data);    
            });
    }catch(err){
res.send(err);
    };
    
});
app.listen(PORT, console.log(`Listening on port ${PORT}`));