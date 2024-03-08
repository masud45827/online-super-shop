const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const User = require('../Models/userModel');
const app = express();

router.use(express.static('public'));
 
const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null , path.join(__dirname,'../public/user'),(error,success)=>{
            if(error){
                console.log(error);
            }
        });
    },
    filename:(req,file,cb)=>{
        const name = Date.now() + '-'+ file.originalname;
        cb(null, name,()=>{
            if(error){
                console.log(error);
            }
        });
    }
});
 
const upload = multer({storage:storage});

router.get('/login',(req,res)=>{
    res.send('log in');
});


router.post('/register',upload.single('image'),async(req,res)=>{
    try {
        console.log(req.body)
        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            phone: req.body.phone,
            division: req.body.division,
            district: req.body.district,
            Thana: req.body.Thana,
            address: req.body.address,
            role: 0,
            image: req.file.filename,
        });
        const result = await newUser.save();
        res.status(201).json(result);
    } catch (err) {
        console.error('Error creating user:', err);
        res.status(500).send('Internal Server Error');
    }
});

router.get('/register',(req,res)=>{
    res.send('successful register');
})


module.exports = router;











// const express = require('express');
// const router = express.Router();
// const User = require('../Models/userModel');
// router.get('/login',(req,res)=>{
//     res.send('log in');
// })
// router.post('/register',async(req,res)=>{
//     const createUser = new User(req.body);
//     const result = await createUser.save();
//     res.status(201).json(result);
// })
// router.get('/register',(req,res)=>{
//     res.send('successful register');
// })


// module.exports = router;