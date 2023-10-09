import { model } from "mongoose";
import detailSchema from "./detailsSchema.js";
import teacherSchema from "./teacherSchema.js";
import studentSchema from "./studentSchema.js";
import collegeSchema from "./collegeSchema.js";
import classRoomSchema from "./classRoom.js";
import departmentSchema from "./departmentSchema.js";
import bookSchema from "./bookSchema.js";
import userSchema from "./userSchema.js";
import productSchema from "./productSchema.js";
import reviewSchema from"./reviewSchema.js"

 export let Detail  = model("Detail",detailSchema)
export let Teacher  = model("Teacher",teacherSchema)
export let Student  = model("Student",studentSchema)
export let Book  = model("Book",bookSchema)
export let College  = model("College",collegeSchema)
export let ClassRoom = model("classRoom",classRoomSchema)
export let Department = model("Department",departmentSchema)
export let User = model("User",userSchema)
export let Product=model("Product",productSchema)
export let Review=model("Review",reviewSchema)