const bodyParser = require("body-parser");
const express = require("express");

const path = require("path");

const app = express();
const encoded = bodyParser.urlencoded();

//port
const port = process.env.PORT || 5002

// static path
app.use(express.static(path.join(__dirname, "../public")));

app.use(express.static(path.join(__dirname, "./routes")));


/// ----MIDDLEWARE----
app.use(express.urlencoded({ extended: true }));
app.use(express.json());




// ROUTERS===



app.get("/logError", (req, res) => {


    app.use(express.static(path.join(__dirname, "../public")));
    res.sendFile(__dirname + "/webpages/home.html");
});





app.get("/", (req, res) => {

    res.sendFile(__dirname + "/webpages/home.html");
});


app.post("/login", require("./routes/account"));

app.get("/welcome", (req, res) => {
    res.sendFile(__dirname + "/webpages/welcome.html")
});






app.listen(port, () => {

    console.log("start in port: " + port);

});