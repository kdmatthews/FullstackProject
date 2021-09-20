const express = require("express");
const app = express();

const creds = require("./db.js");

const PORT = 5432;

app.use(express.json());


//CREATE
app.post("/create_user", async (req,res) => {
    const user_name = req.body.user_name
    const password = req.body.password

    const new_user = await SeaWorld.create({
        user_name: user_name,
        password: password
    });
});



// res.send(`Inserted New user with ${newUser.user_name} ${newUser.password}`);


app.listen(PORT, console.log(`Listening on port ${PORT}`));