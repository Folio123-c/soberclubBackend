import { Router } from "express";
import multer from "multer";
import path from "path";
var storage = multer.diskStorage({
    destination: function (request, file, callback) {
      callback(null, path.join(__dirname, '../uploads'));
    },
    filename: function (request, file, callback) {
      console.log(file);
      callback(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname));
      console.log("uploaded file",request.file)
    },
  });
const upload =multer({storage:storage})
const route=Router();

route.post('/',upload.single('picture'),(req,res)=>{
    console.log("uploaded file",req.file)
})
export default route