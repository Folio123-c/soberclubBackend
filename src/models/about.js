import mongoose from "mongoose";

const aboutSchema=new mongoose.Schema({
    title:String,
    contentSummary:String,
    picture:[String],
    details:String,
    author:String,
    isActive:{
        type:Boolean,
        default:true
    }
},{timestamps:true})

export default mongoose.model("about",aboutSchema)