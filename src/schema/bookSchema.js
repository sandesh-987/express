import { Schema } from "mongoose";

let bookSchema = Schema({
    name:{
        type:String,
        required:true,
    },
    author:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        require:true,
    },
    isAvailable:{
        type:Boolean,
        require:true,
    }
})
export default bookSchema