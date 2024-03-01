const express = require('express');

const app = express();
const User_Route =  require('./routes/user');
app.use('/api/user',User_Route);
app.get('/',(req,res)=>{
    res.status(200);
    res.sendFile(__dirname + "/views/index.html");
})
app.use((req,res)=>{
    res.send('this is not valid route');
})
app.listen(8000,()=>{
   console.log('data base listening port 8000');
})