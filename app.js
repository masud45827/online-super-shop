const express = require('express');
const mongoose = require('mongoose');
const userRoute = require('./Routes/userRoute.js');
const orderRoute = require('./Routes/orderRoute.js');
const productRoute = require('./Routes/productRoute.js');
const cardRoute = require('./Routes/cardRoute.js')
const reviewRouter = require('./Routes/reviewRoute.js');
const sellRouter = require('./Routes/sellRoute.js');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

const app = express();

dotenv.config();
const url = process.env.MONGO_URL;
mongoose.connect(url , {
}).then(()=>{
    console.log('Mongodb connected...')
});

app.use(bodyParser.json());
app.use('/api/user',userRoute);
app.use('/api/order',orderRoute);
app.use('/api/products',productRoute);
app.use('/api/review', reviewRouter);
app.use('/api/sell', sellRouter);
app.use('/api/card', cardRoute);

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