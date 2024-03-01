const express = require('express');
const mongoose = require('mongoose');
const userRoute = require('./Routes/userRoute.js');
const orderRoute = require('./Routes/orderRoute.js');
const productRoute = require('./Routes/productRoute.js');
const reviewRouter = require('./Routes/reviewRoute.js');
const sellRouter = require('./Routes/sellRoute.js');
const bodyParser = require('body-parser');
const app = express();
mongoose.connect('mongodb+srv://cluster0.fgp9rxb.mongodb.net/' , {
    dbName: 'onlineSuperShop',
    user: 'fuadul202',
    pass: 'Fuadul11235813',
}).then(()=>{
    console.log('Mongodb connected...')
});

app.use(bodyParser.json());
app.use('/api/user',userRoute);
app.use('/api/order',orderRoute);
app.use('/api/products',productRoute);
app.use('/api/review', reviewRouter);
app.use('/api/sell', sellRouter);

app.get('/',(req,res)=>{
    res.send('successful api');
})
app.post('/',(req,res)=>{
    res.send('successful');
    console.log("Alhamdulillah");
})
app.listen(8000,()=>{
   console.log('listening port 8000');
})