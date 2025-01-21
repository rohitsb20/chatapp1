import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import dbconnect from './database/dbConnect.js';
import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/message.routes.js';
import userRoutes from "./routes/user.routes.js";

const app = express();
dotenv.config();
app.use(express.json());
app.use(cookieParser());



app.use('/api/auth', authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);


app.listen(3000, () => {
    dbconnect();
    console.log(`Server is running on port 3000`);
});