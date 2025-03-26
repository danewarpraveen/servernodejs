import express from 'express'
import { addFood, deleteFood, getFood, updateFood } from '../controller/foodController.js'

import multer from 'multer'

const foodRoutes = express.Router();




// // iamge storege enginee

// const storage = multer.diskStorage({
//     distination : 'uploads',
//     filename:(req,file,cb)=>{        // cb means call back
//         return cb(null,`${Date.now()}${file.originalname}`)
//     }
// })

// const upload = multer({storage:storage});
//foodRoutes.post('/add',upload.single("Imange"),addFood);   // here image is the key name 
//routes after end point
foodRoutes.post('/addstudent',addFood);
foodRoutes.get('/getStudent',getFood)
foodRoutes.delete("/deleteStudent",deleteFood);
foodRoutes.put("/updateStudent",updateFood);

export default foodRoutes