import { Schema } from "mongoose";

let departmentSchema = Schema({
    name:{
        type:String,
        required:true,
    },
    hod:{
        type:String,
        required:true,
    },
    totalMember :{
        type:Number,
        require:true,
    }
})
export default departmentSchema