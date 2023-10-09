import { Schema } from "mongoose";

let classRoomSchema = Schema({
    name:{
        type:String,
        required:true,
    },
    numberOfBench:{
        type:Number,
        required:true,
    },
    hasTv:{
        type:Boolean,
        require:true,
    }
})
export default classRoomSchema