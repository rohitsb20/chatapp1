import express from 'express';
import dotenv from 'dotenv';
import dbconnect from './database/dbConnect.js';
const app = express();
dotenv.config();


app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(3000, () => {
    dbconnect();
    console.log(`Server is running on port 3000`);
});