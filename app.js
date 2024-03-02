const express = require('express');
const mongoose = require('mongoose');
const bodyPerser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();

const url = process.env.MONGO_URL;
const app = express();
app.use(bodyPerser.json());
mongoose.connect(url , {
    dbName: 'onlineSuperShop',
}).then(()=>{
    console.log('Mongodb connected...')
});


app.get('/',(req,res)=>{
    res.send('successful');
})
app.post('/',(req,res)=>{
    res.send('successful');
})


const ProductRoute = require('./Routes/productsRoute');
app.use('/products' , ProductRoute);


const Card = require('./Routes/cardRoute');
app.use('/card',Card);

app.listen(process.env.PORT,()=>{
   console.log('data base listening port 8000');
})