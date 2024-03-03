import mongoose from "mongoose";

const connectTodb = async()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(`Connected to database ${conn.connection.name}`)
    }catch(err){
        console.log(err);

    } 
}

export default connectTodb