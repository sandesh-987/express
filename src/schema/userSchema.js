import { Schema } from "mongoose";

let userSchema =Schema({
    fullName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
    }
})
export default userSchema