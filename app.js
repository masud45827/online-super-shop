const express = require('express');
const mongoose = require('mongoose');
const bodyPerser = require('body-parser');

const app = express();
app.use(bodyPerser.json());
mongoose.connect('mongodb+srv://cluster0.fgp9rxb.mongodb.net/' , {
    dbName: 'onlineSuperShop',
    user: 'fuadul202',
    pass: 'Fuadul11235813',
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

app.listen(8000,()=>{
   console.log('data base listening port 8000');
})