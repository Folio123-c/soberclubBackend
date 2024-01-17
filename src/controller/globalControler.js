import Response from "../utils/response";
import status from "http-status";
//create and save data to database
export const create=(Model)=>async(req,res,next)=>{
    try {
        const data=await Model.create(req.body);
        if(!res){
          return Response.errorMessage(res,"failed to creacte",status.BAD_REQUEST)  
        }
        return Response.succesMessage(res,"Success",data,status.CREATED);
    } catch (error) {
        console.log(error)
    }

}

//get all from database

export const getAll=(Model)=>async(req,res,next)=>{
    try {
        const data=await Model.find();
        console.log(data)
        if(!data){
            return Response.errorMessage(res,"failed ",status.BAD_REQUEST)
        }
        return Response.succesMessage(res,"Success",data,status.OK);
    } catch (error) {
        console.log(error)
    }

}
export const getOneById=(Model)=>async(req,res,next)=>{
    try {
        const data=await Model.findById(req.params.id);
        if(!data){
            return Response.errorMessage(res,"failed ",status.BAD_REQUEST)
        }
        return Response.succesMessage(res,"Success",data,status.OK);
    } catch (error) {
        console.log(error)
    }
}
export const updateOneById=(Model)=>async(req,res,next)=>{
    try {
        const data=await Model.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(!data){
            return Response.errorMessage(res,"failed ",status.BAD_REQUEST)
        }
        return Response.succesMessage(res,"Success",data,status.OK);
    } catch (error) {
        console.log(error)
    }
}
export const deleteOneById=(Model)=>async(req,res,next)=>{
    try {
        const data=await Model.findByIdAndDelete(req.params.id);
        if(!data){
            return Response.errorMessage(res,"failed ",status.BAD_REQUEST)
        }
        return Response.succesMessage(res,"Success",data,status.OK);
    } catch (error) {
        console.log(error)
    }
}