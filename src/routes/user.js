import express from 'express';
import {body, validationResult} from 'express-validator'
import UserController from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.post('/login',
    body("email").isEmail().withMessage('Invalid email format.'),
    body("password").isLength({ min: 5 }).withMessage('Password length must be at least 8 characters.'),
    UserController.login
);

userRouter.post('/register',
    body("email").isEmail().withMessage('Invalid email format.'),
    body("password").isLength({ min: 8 }).withMessage('Password length must be at least 8 characters.'),
    UserController.register
);

userRouter.post('/logout', UserController.logout);
userRouter.get('/',UserController.getAllUsers);
userRouter.get('/:id',UserController.getUserById);



export default userRouter;