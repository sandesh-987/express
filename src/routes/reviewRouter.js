import { Router} from "express";
import { createReview, deleteReview, readAllReview, readById, updateReview } from "../controller/reviewController.js";




let reviewRouter=Router()
reviewRouter
.route("/")
.post(createReview) 
.get(readAllReview)
reviewRouter
.route("/:id")
.get(readById)
.patch(updateReview)
.delete(deleteReview)

export default reviewRouter