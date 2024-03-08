const express = require('express');
const mongoose = require('mongoose');
const userRoute = require('./Routes/userRoute.js');
const orderRoute = require('./Routes/orderRoute.js');
const productRoute = require('./Routes/productRoute.js');
const cardRoute = require('./Routes/cardRoute.js')
const reviewRouter = require('./Routes/reviewRoute.js');
const sellRouter = require('./Routes/sellRoute.js');
const bodyParser = require('body-parser');
const ConnectDb = require('./config/db.js');
const cors = require('cors');

const dotenv = require('dotenv');


const app = express();

app.use(cors());
dotenv.config();

app.use(bodyParser.json());
app.use('/api/user',userRoute);
app.use('/api/order',orderRoute);
app.use('/api/products',productRoute);
app.use('/api/review', reviewRouter);
app.use('/api/sell', sellRouter);
app.use('/api/card', cardRoute);

app.get('/',(req,res)=>{
    res.send('this is main localhost url');
})

app.all('*',(req,res,next)=>{
  const error = new Error(`the requested url is invalid : [${req.url}]`)
  error.status = 400;
  next(error);
})

app.use((err,req,res,next)=>{
    res.status(err.status||500).json({
        message: err.message,
    })
});

const main =async()=>{
    await ConnectDb();
    const PORT = process.env.PORT;
    app.listen(PORT,()=>{
       console.log('listening port 8000');
    })
}

main();
