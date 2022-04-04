const express = require("express");
const app = express();
const port = 3034;
const WordMatching = require("./WordMatching");

app.use("/", (req, res) => {
    let service = new WordMatching("abc", "abz");
    const response = service.getMatchingScore();
    res.send(`returning scrore is ${response} `, 200);
})

app.listen(port, () => {
    console.log("app running on port 3034");
})