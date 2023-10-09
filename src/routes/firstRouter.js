import { Router } from "express";

let firstRouter= Router()

firstRouter
.route("/a")
.post((req,res)=>{res.json("home post")})
.get((req,res)=>{res.json("home get")})
.patch((req,res)=>{res.json("home patch")})
.delete((req,res)=>{res.json("home delete")})
firstRouter
.route("/name")
.post((req,res)=>{res.json("name post")})
.get((req,res)=>{res.json("name get")})
.patch((req,res)=>{res.json("name patch")})
.delete((req,res)=>{res.json("name delete")})
firstRouter
.route("/bike")
.post((req,res)=>{res.json("bike post")})
.get((req,res)=>{res.json("bike get")})
.patch((req,res)=>{res.json("bike patch")})
.delete((req,res)=>{res.json("bike delete")})
 
export default firstRouter
