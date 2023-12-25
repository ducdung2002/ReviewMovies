import jwt from "jsonwebtoken";

class MiddlewareController {
  async verifyToken(req, res, next) {
    try {
      const token = req.headers.authorization;
      if (token) {
        const accessToken = token.split(" ")[1];
        jwt.verify(accessToken, process.env.ACCESS_KEY, (err, user) => {
          if (err) {
            return res.status(400).json({ message: "Authentication failed" });
          }
          req.user = user;
          next();
        });
      } else {
        return res.status(400).json({ message: "Authentication failed" });
      }
    } catch (err) {
      return res.status(500).json({ message: err.toString() });
    }
  }
}
export default new MiddlewareController();
