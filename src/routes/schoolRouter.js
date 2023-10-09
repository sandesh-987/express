import { Router } from "express";

let schoolRouter= Router()

schoolRouter
.route("/")
.post((req,res,next)=>{
console.log("1")
next()
},(req,res,next)=>{
    console.log("2")
    next()
},(req,res,next)=>{
    console.log("3")
}
 )
.get((req,res)=>{
    res.json({
        success:true,
        message:"school read successfully"
    })
})
.patch((req,res)=>{
    res.json({
        success:true,
        message:"school updated successfully"
    })

})
.delete((req,res)=>{
    res.json({
        success:true,
        message:"school delete successfully"
    })
})


export default schoolRouter
