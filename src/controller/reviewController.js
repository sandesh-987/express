import { Review } from "../schema/model.js"


export let createReview=async(req,res)=>{
    let data=req.body
    try{
        let result=await Review.create(data)
        res.json({success:true,message:"review created successfully",data:result})
    }
    catch(error){
        res.json({
            success:false,
            message:error.message
        })
    }
}
export let readAllReview=async(req,res)=>{
    try {
        let result=await Review.find({})
        res.json({success:true,message:"review read successfully",data:result})
    } catch (error) {
        res.json({
            success:false,
            message:Error.message
        })
    }
}
export let readById = async(req,res)=>{
    try {
        let result = await Review.findById(id)
        res.json({success:true,message:"review read successfully",data:result})
    } catch (error) {
        res.json({
            success:false,
            message:Error.message
        })
        
    }
}
export let updateReview = async(req,res)=>{
    try {
        let result = await Review.findByIdAndUpdate(id,data,{new:true})
        res.json({success:true,
            message:"review updated successfully",
            data:result
        })
    } catch (error) {
        
        res.json({
            success:false,
            message:Error.message
        })
    }
}
export  let deleteReview = async(req,res)=>{
    let id = req.params.id
    try {
        let result = await Review.findByIdAndDelete(id)
            res.json({
                success:true,
                message:"review deleted successfully",
                data:result})
    } catch (error){
            res.json({
                success:false,
                message:error.message
            })
        
    }
}