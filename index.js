import express from 'express';
import mapPinRoute from './routes/mapPinInfo';


const app = express();


app.use(express.static(`${__dirname}/public`));



app.use('/mapPin', mapPinRoute);





// listen

const porta = process.env.PORT || 8080;
app.listen(porta, () => console.log('Example app listening on port 8080!'));
