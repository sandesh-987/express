import { Schema } from "mongoose";

let teacherSchema = Schema({
    name:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        required:true,
    },
    isMarried:{
        type:Boolean,
        require:true,
    },
    subject:{
        type:String,
        require:true,
    }
})
export default teacherSchema