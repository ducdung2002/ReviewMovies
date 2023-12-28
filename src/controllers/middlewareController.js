import jwt from "jsonwebtoken";

class MiddlewareController {
  async verifyToken(req, res, next) {
    console.log(req.headers);
    try {
      const token = req.headers.authorization;
      console.log(token);
      if (token) {
        const accessToken = token.split(" ")[1];
        jwt.verify(accessToken, process.env.ACCESS_KEY, (err, user) => {
          console.log(token);
          if (err) {
            return res
              .status(401)
              .json({ message: "Invalid or expired token" });
          }
          req.user = user;
          next();
        });
      } else {
        return res
          .status(401)
          .json({ message: "Authentication failed. Token not provided." });
      }
    } catch (err) {
      return res.status(500).json({ message: err.toString() });
    }
  }
}

export default new MiddlewareController();
