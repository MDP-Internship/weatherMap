const express = require("express");

const router = express.Router();

router.get("/getAll", async function (req, res) {
    Post.find({}).then(function (posts) { //find arama yapacağı alan {} hepsini
        res.send(200, posts);
    });
});