import { Router } from "express";
import { Teacher } from "../schema/model.js";

let teacherRouter= Router()

teacherRouter
.route("/")
.post(async(req,res)=>{
    let data = req.body

     try {  
        let result = await Teacher.create(data)
        res.json({
            success:true,
            message:"teacher created successfully",
        })
        
    } catch (error) {
        res.json({
            success:false,
            message:error.message
        })
        
    } 

   
    //console.log(req.body)// to print im terminal
   
})
.get(async(req,res)=>{
    try {
        let result = await Teacher.find({})
        // let result = await Teacher.find({name:"nitan"}) for searching
         res.json({
        success:true,
        message:"teacher read successfully",
        data:result,
    })

        
    } catch (error) {
        res.json({
            success:false,
            message:error.message
        })

        
    }

    
   
})

teacherRouter.route("/:id")
.get(async(req,res)=>{
    let id = req.params.id
try {
    let result = await Teacher.findById(id)
    res.json({
        success:true,
        message:"teacher read sucessfully",
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
    try {let result=await Teacher.findByIdAndUpdate(id,data,{new : true})
    res.json({
        success:true,
        message:"Teacher updated sucessfully",
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
        let result=await Teacher.findByIdAndDelete(id)
        res.json({success:true,message:"teacher deleted successfully",data:result})
        
    } catch (error) {
        res.json({
            success:false,
            message:error.message
        })
    }
    
    })
    

export default teacherRouter