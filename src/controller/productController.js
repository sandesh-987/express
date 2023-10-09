import { Product } from "../schema/model.js"  


export let createProduct=async(req,res)=>{
    let data=req.body
    try{
        let result=await Product.create(data)
        res.json({success:true,message:"product created successfully",data:result})
    }
    catch(error){
        res.json({
            success:false,
            message:error.message
        })
    }
}
export let readAllProduct=async(req,res)=>{
    try {
        let result=await Product.find({})
        res.json({success:true,message:"product read successfully",data:result})
    } catch (error) {
        res.json({ 
            success:false,
            message:Error.message
        })
    }
}
export let readById = async(req,res)=>{
    try {
        let result = await Product.findById(id)
        res.json({success:true,message:"product read successfully",data:result})
    } catch (error) {
        res.json({
            success:false,
            message:Error.message
        })
        
    }
}
export let updateProduct = async(req,res)=>{
    try {
        let result = await Product.findByIdAndUpdate(id,data,{new:true})
        res.json({success:true,
            message:"product updated successfully",
            data:result
        })
    } catch (error) {
        
        res.json({
            success:false,
            message:Error.message
        })
    }
}
export  let deleteProduct = async(req,res)=>{
    let id = req.params.id
    try {
        let result = await Product.findByIdAndDelete(id)
            res.json({
                success:true,
                message:"product deleted successfully",
                data:result})
    } catch (error){
            res.json({
                success:false,
                message:error.message
            })
        
    }
}