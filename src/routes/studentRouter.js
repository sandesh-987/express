import { Router } from "express";
import { Student } from "../schema/model.js";

let studentRouter= Router()

studentRouter
.route("/")
.post(async(req,res)=>{
    let data = req.body

     try {  
        let result = await Student.create(data)
        res.json({
            success:true,
            message:"student created successfully",
        })
        
    } catch (error) {
        res.json({
            success:false,
            message:error.message
        })
        
    } 

   
})
.get(async(req,res)=>{
    try {
        let result = await Student.find({})
         res.json({
        success:true,
        message:"student read successfully",
        data:result,
    })

        
    } catch (error) {
        res.json({
            success:false,
            message:error.message
        })

        
    }

    
   
})

studentRouter.route("/:id")
.get(async(req,res)=>{
    let id = req.params.id
try {
    let result = await Student.findById(id)
    res.json({
        success:true,
        message:"student read sucessfully",
        data:result
    })

} catch (error) {
    res.json({
        success:false,
        message:error.message
    })    
}
})
.patch(async(req,res)=>{
    let id =req.params.id
    let data = req.body
    try {let result=await Student.findByIdAndUpdate(id,data,{new : true})
    res.json({
        success:true,
        message:"student updated sucessfully",
        data:result
    })
        
    } catch (error) {
        res.json({
            success:false,
            message:error.message
        })
        
    }
})

.delete(async(req,res)=>{
    let id=req.params.id
    try {
        let result=await Student.findByIdAndDelete(id)
        res.json({success:true,message:"student deleted successfully",data:result})
        
    } catch (error) {
        res.json({
            success:false,
            message:error.message
        })
    }
    
    })
    

export default studentRouter