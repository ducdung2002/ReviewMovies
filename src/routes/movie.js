import express from "express";
import MovieController from "../controllers/movieController.js";
import MiddlewareController from "../controllers/middlewareController.js";

const movieRouter = express.Router();

movieRouter.get("/search", MovieController.searchMovieByName);
movieRouter.get("/", MovieController.getAllMovies);
movieRouter.get("/:id", MovieController.getMovieById);
movieRouter.post("/:id/rate", MovieController.rateMovie);

export default movieRouter;
