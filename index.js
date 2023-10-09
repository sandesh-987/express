import express, { json } from "express"
import firstRouter from "./src/routes/firstRouter.js"
import schoolRouter from "./src/routes/schoolRouter.js"
import vehiclesRouter from "./src/routes/vehiclesRouter.js"
import mongoose, { connect } from "mongoose"
import connectToMongoDb from "./src/connectToMongoDb.js"
import teacherRouter from "./src/routes/teacherRouter.js"
import bookRouter from "./src/routes/bookRouter.js"
import classRoomRouter from "./src/routes/classRoomRouter.js"
// import { sendMail } from "./src/utils/sendmail.js"
import collegeRouter from "./src/routes/collegeRouter.js"
import departmentRouter from "./src/routes/departmentRouter.js"
import studentRouter from "./src/routes/studentRouter.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import userRouter from "./src/routes/userRouter.js"
import productRouter from "./src/routes/productRouter.js"
import reviewRouter from "./src/routes/reviewRouter.js"
import fileRouter from "./src/routes/fileRouter.js"


let expressApp=express()
expressApp.use(json())
let port=8000


// expressApp.use((req,res,next)=>{
//     console.log("hello")
//     next("abc")
// })
// expressApp.use((err,req,res,next)=>{
//     console.log("hello")
//     next()
// })

connectToMongoDb()

try {
    await sendMail({
        from:'"vivek ",sandeshphuyal10@gmail.com>',
        to:[
            "roshanbagale21@gmail.com",
            "shresthashekhar047@gmail.com",
            "ripeshghimire987@gmail.com"                                                    
        ],
        subject:"subject  ",
        html:`<h1>whats the subject <h1>`                                                      
    })
    console.log("email send sucessfully")
} catch (error) {
    console.log(error.message)
    
}

expressApp.use("/a",firstRouter)
expressApp.use("/schools",schoolRouter)
expressApp.use("/vehicles",vehiclesRouter)
expressApp.use("/teacher",teacherRouter)
expressApp.use("/book",bookRouter)
expressApp.use("/classRoom",classRoomRouter)
expressApp.use("/college",collegeRouter)
expressApp.use("/department",departmentRouter)
expressApp.use("/student",studentRouter)
expressApp.use("/user",userRouter)
expressApp.use("/product",productRouter)
expressApp.use("/review",reviewRouter)
expressApp.use("/file",fileRouter)
expressApp.use(express.static("./public"))


expressApp.listen(8000, ()=>{
    console.log("application is connected at 8000 sucessfully")
})



let info = {
    id:"12345",
    role:"admin"
}

let secretKey = "sandesh"
let expiryInfo={
    expiresIn:"365d"
}

let token =  await jwt.sign(info,secretKey,expiryInfo)
// console.log(token)

let someting =await jwt.verify(token,secretKey)


// hasing password

//  let hashpassword = await bcrypt.hash("password@123",10)
//  console.log(hashpassword)

let hasedPassword="$2b$10$8F.IjeSt9BixdOBEMRUqBeTNhqxdR4rP8fzBQoYj/I5KDk7hQbhDu"
let ispasswordMatched= await bcrypt.compare("password@123",hasedPassword)
console.log(ispasswordMatched)