import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

class UserRepo {
  async register({ username, email, password }) {
    const existingUser = await userModel.findOne({ email }).exec();

    if (existingUser) {
      throw new Error("User already exists.");
    }

    const hashPassword = await bcrypt.hash(
      password,
      parseInt(process.env.SECRET_KEY)
    );
    const newUser = await userModel.create({
      username,
      email,
      password: hashPassword,
    });

    return {
      ...newUser._doc,
      password: "Not shown",
    };
  }

  async login({ email, password }) {
    const existingUser = await userModel.findOne({ email }).exec();

    if (existingUser) {
      const isMatch = await bcrypt.compare(password, existingUser.password);

      if (isMatch) {
        const token = jwt.sign(
          {
            data: existingUser,
          },
          process.env.SECRET_JWT_KEY,
          {
            expiresIn: "1d",
          }
        );

        return {
          ...existingUser.toObject(),
          password: "Not shown",
          token: token,
        };
      } else {
        throw new Error("Wrong email or password.");
      }
    } else {
      throw new Error("User does not exist.");
    }
  }

  async getAllUsers() {
    try {
      return await userModel.find();
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async getUserById(id) {
    try {
      return await userModel.findById(id);
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default new UserRepo();
