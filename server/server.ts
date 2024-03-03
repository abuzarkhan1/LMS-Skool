import { app } from "./app";
import connectDB from "./utils/db";
import {v2 as cloudinary} from "cloudinary";
require("dotenv").config();

// creating Sevrer
cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.CLOUD_API,
    api_secret:process.env.CLOUD_SECRET_KEY
})


app.listen(process.env.PORT,()=>{
    console.log(`Server is connected with ${process.env.PORT}`);    
    connectDB();
}); 

//cloudinary done 4:19:00