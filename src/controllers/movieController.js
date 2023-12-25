import MovieRepo from "../repositories/movieRepo.js";

class MovieController {
  async getAllMovies(req, res, next) {
    try {
      const movies = await MovieRepo.getAllMovies();
      res.status(200).json(movies);
    } catch (error) {
      next(error);
    }
  }

  async getMovieById(req, res, next) {
    try {
      const { id } = req.params;
      const movie = await MovieRepo.getMovieById(id);
      if (!movie) {
        return res.status(404).json({ message: "Movie not found" });
      }
      res.status(200).json(movie);
    } catch (error) {
      next(error);
    }
  }

  async searchMovieByName(req, res, next) {
    try {
      const { name } = req.query;
      const movies = await MovieRepo.searchByName(name);
      res.status(200).json(movies);
    } catch (error) {
      next(error);
    }
  }

  async rateMovie(req, res, next) {
    try {
      const { id } = req.params;
      const { stars } = req.body;

      const movie = await MovieRepo.getMovieById(id);
      if (!movie) {
        return res.status(404).json({ message: "Movie not found" });
      }

      movie.ratings.push({ stars });

      await movie.save();

      res.status(200).json({ message: "Rating saved successfully" });
    } catch (error) {
      next(error);
    }
  }
}
export default new MovieController();
