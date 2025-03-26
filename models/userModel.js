import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name : String,
    email :String,
    password : String,
    role: String
})

const userModel = mongoose.models.user || mongoose.model("user",userSchema);   // if schema present it will use that one only if

export default userModel