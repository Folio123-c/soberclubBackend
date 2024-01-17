import mongoose from "mongoose";

const serviceSchema=new mongoose.Schema({
    title:String,
    details:String,
    isActive:{
        type:Boolean,
        default:true
    }
},{timestamps:true})

export default mongoose.model("service",serviceSchema)