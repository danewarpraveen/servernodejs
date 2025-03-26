import express from 'express'
 
import cors from 'cors'
import { connectDB } from './config/db.js';
import foodRoutes from './routes/foodroute.js';
import userRoutes from './routes/userroutes.js';
import { loginRouter } from './routes/loginroutes.js';

const app = express();
const port = 5000 ;

app.use(express.json());
app.use(cors());

connectDB();

//api end points
app.use("/api",foodRoutes);
app.use("/api",userRoutes);
app.use("/api",loginRouter);


app.get('/',(req,res)=>{
    res.send("Api Working")
})

app.listen(port,()=>{

    console.log(`server Started on ${port}`);

})

//mongodb+srv://danewarp:Praveen75@cluster0.vrz74lz.mongodb.net/?