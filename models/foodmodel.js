import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
    fullName : { type :String },
    fathername :{type:String,},
    addrees :{type:String},
    phone :{type:String},
    age :{type:String},
    speciality :{type:String},
    appoiDate :{type:String}
})

const foodModel = mongoose.models.food || mongoose.model("patiants",foodSchema);   // if schema present it will use that one only if

export default foodModel