import mongoose from "mongoose";
export const connectDB = async ()=>{
    (await mongoose.connect('mongodb+srv://togbolopaul:g9c7v6Jlx7sTQc86@cluster0.fnpvz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(()=>console.log("DB Connected")))
}