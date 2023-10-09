import { Schema } from "mongoose";

let productSchema =Schema({
    userId:{
        type:Number,
        required:true,
    },
    productId:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true,
    }
})
export default productSchema