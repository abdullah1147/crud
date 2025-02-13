import mongoose from "mongoose";

const imageSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
    },
    image:{
        type:String,
        required:true,
    }
},{timestamps:true});

const imageModel = mongoose.model('product',imageSchema);

export default imageModel