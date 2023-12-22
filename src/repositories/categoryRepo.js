import categoryModel from "../models/categoryModel.js";
import movieModel from "../models/movieModel.js";

class CategoryRepo {
    async getAllCategories() {
        try {
          return await categoryModel.find();
        } catch (error) {
          throw new Error(error.message);
        }
      }
    
      async getCategoryById(id) {
        try {
          return await categoryModel.findById(id);
        } catch (error) {
          throw new Error(error.message);
        }
      }

      async getMovieByCategoryId(categoryId) {
        try {
          const movies = await movieModel.find({ categories: [categoryId] }).populate('categories');
          return movies;
        } catch (error) {
          throw new Error(error.message);
        }
      }


    }

export default new CategoryRepo