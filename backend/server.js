import express from 'express';
import dotenv from 'dotenv';
import dbconnect from './database/dbConnect.js';
import authRoutes from './routes/auth.routes.js';
const app = express();
dotenv.config();
app.use(express.json());


app.use('/api/auth', authRoutes);

app.listen(3000, () => {
    dbconnect();
    console.log(`Server is running on port 3000`);
});