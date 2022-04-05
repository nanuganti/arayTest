const express = require("express");
const app = express();
const port = 3035;
const WordMatching = require("./WordMatching");

app.use("/", (req, res) => {
    const { firstWord, secondWord } = req.query;
    let service = new WordMatching(firstWord, secondWord);
    const response = service.getMatchingScore();
    res.status(200).send(`returning scrore is ${response} `);
})

app.listen(port, () => {
    console.log("app running on port 3035");
})