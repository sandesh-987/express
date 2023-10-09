import { Schema } from "mongoose";

let studentSchema = Schema({
    name:{
        type:String,
        required:true,
    },
    class:{
        type:Number,
        required:true,
    },
    faculty:{
        type:String,
        require:true,
    }
})
export default studentSchema