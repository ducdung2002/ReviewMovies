import commentModel from "../models/commentModel.js";
import userModel from "../models/userModel.js"

class commentRepo {
    async createComment(user, content, movieId, parentCommentId = null) {
        try {
          const newComment = new commentModel({
            user,
            content,
            movieId,
            parentCommentId,
          });
          const savedComment = await newComment.save();
          return savedComment;
        } catch (error) {
          throw error;
        }
      }
    
      async getCommentsForMovie(movieId) {
        try {
          const comments = await commentModel.find({ movieId }).populate('user','username');
          return comments;
        } catch (error) {
          throw error;
        }
      }

}
export default new commentRepo