const express = require("express");
const app = express();

const creds = require("./db");

const PORT = 5432;

app.use(express.json());


//CREATE
app.post("/create_user", async (req,res) => {
    const user_name = req.body.user_name
    const password = req.body.password
    creds.connect((err, client, release) => {
        if (err) {
            return console.error("Error getting connected to the client", err.stack);
        }
    
    client.query`(INSERT INTO resturants (id,name,street, zipcode,city), VALUES ('${req.body.id}','${req.body.name}','${req.body.street}','${req.body.zipcode}','${req.body.city}')`, (err, result) => {
        if (err) {
            res.status(400).send(err.stack);
        }
            res.status(200).send(result.rows);
        };
    });

    const new_user = await SeaWorld.create({
        user_name: user_name,
        password: password
    });
});



// res.send(`Inserted New user with ${newUser.user_name} ${newUser.password}`);


app.listen(PORT, console.log(`Listening on port ${PORT}`));