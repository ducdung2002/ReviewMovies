import express from 'express';
import commentController from '../controllers/commentController.js';

import checkToken from '../../authorization.js';
const commentRouter = express.Router();

commentRouter.post('/',checkToken,commentController.postComment)
commentRouter.get('/:movieId',commentController.getCommentForMovie)


export default commentRouter;