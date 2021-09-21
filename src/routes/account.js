const express = require('express');
const routers = express.Router();
const app = express();
const path = require('path');


app.use(express.static(path.join(__dirname, "../webpages")));


// importing routers directory
const selectServices = require("../sevices/select");




// CREATING ROUTS

routers.post("/login", async(req, res) => {
    var username = req.body.username;
    var password = req.body.password;

    const results = await selectServices(username, password);

    if (results) {
        res.redirect("/welcome")
        console.log(results);

    } else {

        res.redirect("/");

        console.log("incorrect");
        console.log(req.body);
    }




});





module.exports = routers;