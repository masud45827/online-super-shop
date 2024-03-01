const express = require('express');
const mongoose = require('mongoose');
const reviewRouter = require('./Routes/review.js');
const sellRouter = require('./Routes/sell.js');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://cluster0.fgp9rxb.mongodb.net/' , {
    dbName: 'onlineSuperShop',
    user: 'fuadul202',
    pass: 'Fuadul11235813',
}).then(()=>{
    console.log('Mongodb connected...')
});

app.post('/',(req,res)=>{
    console.log("Alhamdulillah....2");
});

app.use('/api/review', reviewRouter);
app.use('/api/sell', sellRouter);

app.listen(8000,()=>{
   console.log('data base listening port 8000');
})