import express from 'express';
import MovieController from '../controllers/movieController.js';

const movieRouter = express.Router();

movieRouter.get("/search", MovieController.searchMovieByName);
movieRouter.get("/",MovieController.getAllMovies)
movieRouter.get("/:id",MovieController.getMovieById)


export default movieRouter;