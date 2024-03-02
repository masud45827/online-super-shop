const express = require('express');
const mongoose = require('mongoose');
const reviewRouter = require('./Routes/reviewRoute.js');
const sellRouter = require('./Routes/sellRoute.js');
const bodyParser = require("body-parser");
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URL,{})
.then(()=>{
    console.log('Mongodb connected...')
});

app.post('/',(req,res)=>{
    console.log("Alhamdulillah....2");
});
app.use('/api/review', reviewRouter);
app.use('/api/sell', sellRouter);

app.get('/api/review', (req, res)=>{
    res.render("postReview.ejs");
});

// app.post('/api/review/upload', async(req, res) => {
app.post('/api/review', reviewRouter);

    // // app.post('/api/review/upload', async(req, res) => {
    // app.post('/api/review', upload.single('image'), async(req, res) => {
    //     console.log(req.file.filename);
    //     res.send('File uploaded successfully');
    // });

app.listen(process.env.PORT,()=>{
   console.log('data base listening port 8000');
})