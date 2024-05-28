import mongoose from 'mongoose'

export const connectDB = async () =>{
    await mongoose.connect("mongodb+srv://danewarp:Praveen75@cluster0.vrz74lz.mongodb.net/projects").then(()=>{
        console.log("db connected suucess fully");
    })
}