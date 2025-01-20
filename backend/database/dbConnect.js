
import mongoose from "mongoose";

const dbconnect = async () => {
    try {
      await  mongoose.connect(process.env.MONGO_URI);
        console.log("Mongo db is connected");
        
    } catch (error) {
        console.log("Error connecting to database");
        
    }
}

export default dbconnect;