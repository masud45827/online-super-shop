const express = require('express');
const router = express.Router();
const Review = require("../Models/reviewModel.js");
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/review') // Destination folder for uploaded files
    },
    filename: function (req, file, cb) {
        let imgUrlName = Date.now() + path.extname(file.originalname);
        console.log(imgUrlName);
        cb(null, imgUrlName) // File name
    }
});

// Initialize multer
const upload = multer({ storage: storage });

router.post('/', upload.single('image'), async (req, res)=>{
    const createReview = new Review(req.body);
    createReview.image = req.file.filename;
    const result = await createReview.save();
    // console.log("working...");
    // res.send("working...");
    console.log(createReview);
   // res.send(" Image");
     res.send(createReview);
});

module.exports = router;




// const express = require('express');
// const router = express.Router();
// const Review = require("../Models/reviewModel.js");
// const multer = require('multer');
// const path = require('path');

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, './Images/Review') // Destination folder for uploaded files
//     },
//     filename: function (req, file, cb) {
//         let imgUrlName = Date.now() + path.extname(file.originalname);
//         console.log(imgUrlName);
//         cb(null, imgUrlName) // File name
//     }
// });

// // Initialize multer
// const upload = multer({ storage: storage });

// router.post('/', upload.single('image'), async (req, res)=>{
//     const createReview = new Review(req.body);
//     createReview.image = req.file.filename;
//     const result = await createReview.save();
//     // console.log("working...");
//     // res.send("working...");
//     console.log(createReview);
//     res.send("upload Image");
//     // res.send(createReview);
// });

// module.exports = router;






// const express = require('express');
// const router = express.Router();
// const multer = require('multer');
// const path = require('path');
// const Review = require("../Models/reviewModel.js");

// router.use(express.static('public'));
 
// const storage = multer.diskStorage({
//     destination:(req,file,cb)=>{
//         cb(null , path.join(__dirname,'../public/review'),(error,success)=>{
//             if(error){
//                 console.log(error);
//             }
//         });
//     },
//     filename:(req,file,cb)=>{
//         const name = Date.now() + '-'+ file.originalname;
//         cb(null, name,()=>{
//             if(error){
//                 console.log(error);
//             }
//         });
//     }
// });
 
// const upload = multer({storage:storage});
// router.post('', upload.single('image'),async (req, res)=>{
//     try {
//         const newReview = new Review({
//             user_id: req.body.user_id,
//             product_id: req.body.product_id,
//             comment: req.body.comment,
//             rating: req.body.rating,
//             image: req.file.filename,
//         });
//         const result = await newReview.save();
//         res.status(201).json(result);
//     } catch (err) {
//         console.error('Error creating user:', err);
//         res.status(500).send('Internal Server Error');
//     }



//     const createReview = new Review(req.body);
//     const result = await createReview.save();
//     // console.log("working...");
//     // res.send("working...");
//     res.send(createReview);
// });

// module.exports = router;





// const express = require('express');
// const router = express.Router();
// const Review = require("../Models/reviewModel.js");


// router.post('', async (req, res)=>{
//     const createReview = new Review(req.body);
//     const result = await createReview.save();
//     // console.log("working...");
//     // res.send("working...");
//     res.send(createReview);
// });

// module.exports = router;