import userModel from "../models/userModel.js";
const bcrypt = require("bcrypt");
import fs from 'fs'
import { generateToken } from "../utils/jwtUtils.js";

const adduser = async (req, res) => {
    // const imagevariable = `${req.file.filename}`
    const user = new userModel({
        name: req.body.name,
        email: req.body.email,
        hashedpassword :req.body.hashedpassword,
        role : "Customer"
       
    })
      console.log(user,">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
    try {
        await user.save();
        res.json({ success: true, message: "data stored success.<>>>>>>>>>>>>>>>>>>>>>>>>>>>>" })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "error" })
    }
}

export { adduser }

const getuser = async (req, res) => {
    try {
        const users = await userModel.find({});
        res.json({ success: true, data: users })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "error" })
    }
}
export { getuser }


const login = async (req,res)=>{

    try {
        const {email,password} = req.body ;
        const existingUser = await userModel.findOne({ email })

        if(!existingUser){
            throw new Error("user not found");
        }

        const isPassWordValid = bcrypt.compare(password,existingUser.password);

        if(!isPassWordValid){
            throw new Error("incorrect Password");
        }
        const token =  generateToken(existingUser);
        res.json({ token : token});
    } catch (error) {
        throw new Error("Invalid Credentials");
    }
}


export { login }

const deleteFood = async (req, res) => {
    try {
        const food = await foodModel.deleteOne({ _id: req.body._id });
        res.json({ success: true, data: food })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "error" })
    }
}
export { deleteFood }

const updateFood = async (req, res) => {
    try {
        const food = await foodModel.updateOne({ _id: req.body._id }, {
            fullName: req.body.fullName,
            fathername: req.body.fathername,
            addrees: req.body.addrees,
            phone: req.body.phone,
            age: req.body.age,
            speciality: req.body.speciality,
            appoiDate: req.body.appoiDate
        });
        res.json({ success: true, data: food })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "error" })
    }
}
export { updateFood }


