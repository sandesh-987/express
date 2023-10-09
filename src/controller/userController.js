import { User } from "../schema/model.js"


export let createUser=async(req,res)=>{
    let data=req.body
    try{
        let result=await User.create(data)
        res.json({success:true,message:"user created successfully",data:result})
    }
    catch(error){
        res.json({
            success:false,
            message:error.message
        })
    }
}
export let readAllUser=async(req,res)=>{
    try {
        let result=await User.find({})
        res.json({success:true,message:"teacher read successfully",data:result})
    } catch (error) {
        res.json({
            success:false,
            message:Error.message
        })
    }
}
export let readById = async(req,res)=>{
    try {
        let result = await User.findById(id)
        res.json({success:true,message:"user read successfully",data:result})
    } catch (error) {
        res.json({
            success:false,
            message:Error.message
        })
        
    }
}
export let updateUser = async(req,res)=>{
    try {
        let result = await User.findByIdAndUpdate(id,data,{new:true})
        res.json({success:true,
            message:"user updated successfully",
            data:result
        })
    } catch (error) {
        
        res.json({
            success:false,
            message:Error.message
        })
    }
}
export  let deleteUser = async(req,res)=>{
    let id = req.params.id
    try {
        let result = await User.findByIdAndDelete(id)
            res.json({
                success:true,
                message:"user deleted successfully",
                data:result})
    } catch (error){
            res.json({
                success:false,
                message:error.message
            })
        
    }
}