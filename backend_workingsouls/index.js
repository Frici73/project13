const express = require("express")
const app = express()
const routes = require("./routes/routes")

// Middleware-ek
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// api routes-ek
app.use("/api", routes)


/*
app.use("/", (req, res) => {
    res.sendFile(__dirname + "nem tudom")
})

// valami ilyesmi
app.listen(3000, (req, res) => {
    console.log("http://localhost:3000")
})
*/