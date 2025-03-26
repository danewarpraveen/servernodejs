import mongoose from 'mongoose'

export const connectDB = async () =>{
    await mongoose.connect("mongodb+srv://pdanewar:pdanewar7576@cluster0.fgwfv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    ).then(()=>{
        console.log("db connected suucess fully");
    })
}


// mongodb+srv://pdanewar:praveen7576@cluster0.kbo3paa.mongodb.net/students"
