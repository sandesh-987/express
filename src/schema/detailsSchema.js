import { Schema } from "mongoose";

let detailSchema = Schema({
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
    }
})
export default detailSchema