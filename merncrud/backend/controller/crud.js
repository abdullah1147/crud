import path from "path";
import multer from "multer";
import fs from 'fs';
import imageModel from "../model/crud.js";

const uploadDir = path.resolve('uploads');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true })
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, "uploads/"),
    filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`)
});

const upload = multer({ storage });

const imageAdd = async (req, res) => {
    try {
        if (!req.file) {
            res.send("File Not Upload")
        }
        console.log("File Upload", req.file);
        const fullurl = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;
        const newImg = new imageModel({
            name: req.body.name,
            image: fullurl,
        });
        const saveImg = await newImg.save();
        if (saveImg) {
            res.send('Upload');
        }
    }
    catch (error) {
        console.log(error.message)
    }
}

const uploadMiddle = upload.single('image');

const imageFetch = async (req, res) => {
    try {
        const image = await imageModel.find();
        if (!image) {
            res.send("Not Found")
        }
        res.json({
            success: true,
            image: image,
        })
    }
    catch (error) {
        console.log(error.message)
    }
}

const imageDelete = async (req, res) => {
    try {
        const { id } = req.params;
        const image = await imageModel.findByIdAndDelete(id);
        if (!image) {
            res.send("Not Found")
        }
        res.send('Delete')
    }
    catch (error) {
        console.log(error.message)
    }
}

const imageEdit = async (req, res) => {
    try {
        const {id} = req.params;
        let fullurl;
        if(req.file){
            fullurl = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;
        }
        const updateData = {name:req.body.name};
        if(fullurl){
            updateData.image = fullurl
        }
        const image = await imageModel.findByIdAndUpdate(id,updateData,{new:true});
        if (!image) {
            res.send("Not Found")
        }
        res.json({
            success: true,
            message: "Updated Successfully"
        });
    }
    catch (error) {
        console.log(error.message)
    }
}

export {imageAdd,uploadMiddle,imageFetch,imageDelete,imageEdit}

