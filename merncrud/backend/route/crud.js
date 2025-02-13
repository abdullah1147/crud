import express from 'express'
import { imageAdd, imageDelete, imageEdit, imageFetch, uploadMiddle } from '../controller/crud.js';

const imageRouter = express.Router();

imageRouter.post('/add',uploadMiddle,imageAdd);
imageRouter.get('/read',imageFetch);
imageRouter.delete('/del:id',imageDelete);
imageRouter.put('/edit/:id',uploadMiddle,imageEdit);

export default imageRouter