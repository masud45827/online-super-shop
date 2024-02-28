const express = require('express');

const app = express();
app.get('/',(req,res)=>{
    res.send('successful api');
})
app.listen(8000,()=>{
   console.log('data base listening port 8000');
})