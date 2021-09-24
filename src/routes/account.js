const express = require('express');
const routers = express.Router();
const app = express();




// importing routers directory
const selectServices = require("../sevices/select");




// CREATING ROUTS

routers.post("/login", async(req, res) => {
    var username = req.body.username;
    var password = req.body.password;

    const results = await selectServices(username, password);

    if (results.length > 0) {
        res.redirect("/welcome")
        console.log(req.body);
        console.log(results);

    } else {

        res.redirect("/");
         app.use(express.static(path.join(__dirname, "../public")));

        console.log("incorrect");
        
    }




});





module.exports = routers;