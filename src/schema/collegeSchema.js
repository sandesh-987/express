import { Schema } from "mongoose";

let collegeSchema = Schema({
    name:{
        type:String,
        required:true,
    },
    location:{
        type:String,
        required:true,
    }
})
export default collegeSchema