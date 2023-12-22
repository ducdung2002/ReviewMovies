import express from 'express';
import CategoryController from '../controllers/categoryController.js';

const categoryRouter = express.Router();

categoryRouter.get("/",CategoryController.getAllCategories)
categoryRouter.get("/:categoryId/movies", CategoryController.getMoviesByCategoryId); 


export default categoryRouter;