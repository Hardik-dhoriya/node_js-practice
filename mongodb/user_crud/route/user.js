const users = require("../model/user")

const express = require("express")

const route = express.Router()

route.get("/users" , async( req,res) => {
    try{
        const user = await users.find()

        res.status(200).json(user)
    }
    catch(err){
        res.status(500).json({
            message : err.message
        })
    }
})

route.get("/users/:id", async(req,res) => {
    try{
        const user =await users.findById(req.params.id)

        if(!user){
            return res.status(404).json({
                message : "user not found"
            })
        }
        res.status(200).json(user)
    }catch(err){
        res.status(500).json({
            message : err.message
        })
    }
})

route.post("/users" , async(req,res) => {
    try{
        const user = await users.create(req.body)

        res.status(201).json({
            message : "user was created",
            user : user
        })
    }
    catch(err){
    res.status(500).json({
            message : err.message
        })
    
    }
})

route.put("/users/:id" , async (req,res) => {
    try{
        const user =await users.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new : true,
                runValidators : true
            }
        )
        if(!user){
            return res.status(404).json({
                message : "user not found"
            })
        }
        res.status(200).json({
            message : "user successfully updated",
            user : user
        })

    }catch(err){
    res.status(500).json({
        message : err.message
    })
    }
    
})

route.delete("/users/:id" ,async(req,res) => {
    try{
        const user =await users.findByIdAndDelete(req.params.id)

        if(!user){
            return res.status(404).json({
                message : "user not found"
            })
        }
        res.status(200).json({
            message : "user was deleted successfully",
            user : user
        })

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
})

module.exports = route