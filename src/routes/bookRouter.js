import { Router } from "express";
import { Book } from "../schema/model.js";

let bookRouter= Router()

bookRouter
.route("/")
.post(async(req,res)=>{
    let data = req.body

     try {  
        let result = await Book.create(data)
        res.json({
            success:true,
            message:"book created successfully",
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
        let result = await Book.find({})
         res.json({
        success:true,
        message:"book read successfully",
        data:result,
    })

        
    } catch (error) {
        res.json({
            success:false,
            message:error.message
        })

        
    }

    
   
})

bookRouter.route("/:id")
.get(async(req,res)=>{
    let id = req.params.id
try {
    let result = await Book.findById(id)
    res.json({
        success:true,
        message:"book read sucessfully",
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
    try {let result=await Book.findByIdAndUpdate(id,data,{new : true})
    res.json({
        success:true,
        message:"book  updated sucessfully",
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
        let result=await Book.findByIdAndDelete(id)
        res.json({success:true,message:"book deleted successfully",data:result})
        
    } catch (error) {
        res.json({
            success:false,
            message:error.message
        })
    }
    
    })
    

export default bookRouter