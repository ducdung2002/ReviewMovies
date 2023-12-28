import commentRepo from "../repositories/commentRepo.js";

class commentController {
  async postComment(req, res) {
    try {
      const { user, content, movieId, parentCommentId } = req.body;

      if (!content) {
        return res.status(400).json({ error: "Content cannot be empty" });
      }

      const newComment = await commentRepo.createComment(
        user,
        content,
        movieId,
        parentCommentId
      );
      res.status(201).json({ comment: newComment });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getCommentForMovie(req, res) {
    try {
      const { movieId } = req.params;
      const comments = await commentRepo.getCommentsForMovie(movieId);
      res.status(200).json({ comments });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}
export default new commentController();
