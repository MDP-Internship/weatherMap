
const express = require("express");
const mapPin = require("../controller/mapPin/mapPin");

const router = express.Router();

var mapPın = mapPin.mapPinInfo;

router.get("/", async (req, res) => {
    var lang = req.query.lang;
    var lat = req.query.lat;

    res.send(200, mapPın(lang, lat));
});

module.exports = router;


//37.21322953818863, 36.365656577636854