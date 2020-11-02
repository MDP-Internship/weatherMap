const express = require('express');
const app = express();

app.listen(8000, () => {
    console.log('App listening on port 8000!');
});

var mapPinRoute = require("./routes/mapPinInfo");

app.use(express.static(__dirname + '/public'));

/* app.use("/mapPin", (req, res) => {

    res.send("merhaba");
}); */

app.use("/mapPin",mapPinRoute);


