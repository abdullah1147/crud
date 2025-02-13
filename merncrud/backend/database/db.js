import mongoose from "mongoose";
import colors from "colors";

const connectdb = async()=>{
    try{
        const conn = await mongoose.connect(`mongodb://127.0.0.1:27017/testdb`)
        console.log(`db connect`.bgMagenta)
    }
    catch(error){
        console.log(`db not connect`.bgRed)
    }
}

export default connectdb