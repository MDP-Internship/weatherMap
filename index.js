const express = require('express');
const app = express();



var mapPinRoute = require("./routes/mapPinInfo");

app.use(express.static(__dirname + '/public'));

/* app.use("/mapPin", (req, res) => {

    res.send("merhaba");
}); */

app.use("/mapPin",mapPinRoute);


//listen

var porta = process.env.PORT || 8080;
app.listen(porta, () => console.log("Example app listening on port 8080!"));