import mongoose from "mongoose";

const awardSchema=new mongoose.Schema({
    title:String,
    owner:String,
    picture:String,
    details:String,
    isActive:{
        type:Boolean,
        default:true
    }
},{timestamps:true})

export default mongoose.model("award",awardSchema)