import { validationResult } from "express-validator";
import UserRepo from "../repositories/userRepo.js";

class UserController {
  async register(req, res) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, email, password } = req.body;

    try {
      const newUser = await UserRepo.register({
        username,
        email,
        password,
      });
      res.status(201).json({
        message: "Registration successful.",
        data: newUser,
      });
    } catch (error) {
      res.status(500).json({ message: error.toString() });
    }
  }

  async login(req, res) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      const user = await UserRepo.login({ email, password });
      res.status(200).json({
        message: "Login successful.",
        data: user,
      });
    } catch (error) {
      res.status(401).json({ message: error.toString() });
    }
  }

  async logout(req, res) {
    try {
      req.headers.authorization = "";

      res.status(200).json({ message: "Logout successful." });
    } catch (error) {
      res.status(500).json({ message: error.toString() });
    }
  }

  async getAllUsers(req, res, next) {
    try {
      const users = await UserRepo.getAllUsers();
      res.status(200).json(users);
    } catch (error) {
      next(error);
    }
  }

  async getUserById(req, res, next) {
    try {
      const { id } = req.params;
      const user = await UserRepo.getUserById(id);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  }
}

export default new UserController();
