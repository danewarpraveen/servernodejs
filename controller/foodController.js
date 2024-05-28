import foodModel from "../models/foodmodel.js";
import fs from 'fs'
const addFood = async (req,res) =>{

    // const imagevariable = `${req.file.filename}`

    const food = new foodModel({
        name:req.body.name,
        description:req.body.description,
        // price:req.body.price,
        // category : req.body.category,
        // image:imagevariable
    })

    try {
        await food.save();
        res.json({success : true ,message:"data stored success.<>>>>>>>>>>>>>>>>>>>>>>>>>>>>"})
    } catch (error) {
        console.log(error);
        res.json({success:false , message:"error"})
    }
}

export {addFood}

const getFood = async (req,res) =>{
    try {
         const food = await foodModel.find({});
        res.json({success : true ,data:food})
    } catch (error) {
        console.log(error);
        res.json({success:false , message:"error"})
    }
}
export {getFood}


const deleteFood = async (req,res) =>{
    try {
         const food = await foodModel.deleteOne({name:req.body.name});
        res.json({success : true ,data:food})
    } catch (error) {
        console.log(error);
        res.json({success:false , message:"error"})
    }
}
export {deleteFood}

const updateFood = async (req,res) =>{
    try {
         const food = await foodModel.updateOne({name:req.body.name,description:req.body.description});
        res.json({success : true ,data:food})
    } catch (error) {
        console.log(error);
        res.json({success:false , message:"error"})
    }
}
export {updateFood}


