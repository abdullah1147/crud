import express from 'express'
import nodemon from 'nodemon'
import morgan from 'morgan'
import dotenv from 'dotenv'
import connectdb from './database/db.js';
import imageRouter from './route/crud.js';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/img',imageRouter);
app.use('/uploads',express.static('uploads'));
connectdb();
const port = process.env.PORT||4000;
dotenv.config();
app.listen(port,()=>{
    console.log(`server is run ${port}`)
})