import CategoryRepo from "../repositories/categoryRepo.js";

class CategoryController {

  async getAllCategories(req, res, next) {
    try {
      const categories = await CategoryRepo.getAllCategories();
      res.status(200).json(categories);
    } catch (error) {
      next(error);
    }
  }

  async getMoviesByCategoryId(req, res, next) {
    try {
      const { categoryId } = req.params; 
      const movies = await CategoryRepo.getMovieByCategoryId(categoryId);
      res.status(200).json(movies);
    } catch (error) {
      next(error);
    }
  }


}
export default new CategoryController();
