import { Router, query } from "express";

let vehiclesRouter= Router()

vehiclesRouter
.route("/")
.post((req,res)=>{
    console.log(req.body)// to print im terminal
    res.json({
        success:true,
        message:"vehicles created successfully",
        Data:req.body,// to get data in postman 
        query: req.query
    })
})
.get((req,res)=>{
    res.json({
        success:true,
        message:"vehicles read successfully"
    })
})
.patch((req,res)=>{
    console.log(req.query)
    res.json({
        success:true,
        message:"vehicles updated successfully",
        data:req.body,
        query:req.query
    })

})
.delete((req,res)=>{
    res.json({
        success:true,
        message:"vehicles delete successfully"
    })
})


export default vehiclesRouter