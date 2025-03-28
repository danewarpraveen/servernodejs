import foodModel from "../models/foodmodel.js";
import fs from 'fs'
const addFood = async (req, res) => {


    // const imagevariable = `${req.file.filename}`

    const food = new foodModel({
        fullName: req.body.fullName,
        fathername: req.body.fathername,
        addrees: req.body.addrees,
        phone: req.body.phone,
        age: req.body.age,
        speciality: req.body.speciality,
        appoiDate: req.body.appoiDate
        // price:req.body.price,
        // category : req.body.category,
        // image:imagevariable
    })
      console.log(food,">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
    try {
        await food.save();
        res.json({ success: true, message: "data stored success.<>>>>>>>>>>>>>>>>>>>>>>>>>>>>" })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "error" })
    }
}

export { addFood }

const getFood = async (req, res) => {
    try {
        const food = await foodModel.find({});
        res.json({ success: true, data: food })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "error" })
    }
}
export { getFood }


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


