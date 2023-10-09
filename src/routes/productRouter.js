import { Router} from "express";
import { updateProduct, deleteProduct, readAllProduct, createProduct,readById}from "../controller/productController.js"


let productRouter=Router()
productRouter
.route("/")
.post(createProduct) 
.get(readAllProduct)
productRouter
.route("/:id")
.get(readById)
.patch(updateProduct)
.delete(deleteProduct)

export default productRouter