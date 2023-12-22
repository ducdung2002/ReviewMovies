import express from "express";
import { config } from 'dotenv';
import ConnectDB from "./database/database.js";
import cors from "cors";
import router from "./routes/index.js";
import checkToken from "../authorization.js"


// Create web server
const app = express();
app.use(express.json()); // Khai bao dinh dang du lieu ma express se lam viec

// Add middleware to Express server => Kiem soat tat ca cac request di vao server
// app.use(checkToken)
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);
// Load .evn file: config file
config();

// Basic routes: Root router
app.get("/", (req, res) => {
  res.send("Hello Duc Dung.");
});

const port = process.env.PORT || 8080;

router(app);
app.listen(port, async () => {
  await ConnectDB();
  console.log(`Node RESTful API running on port ${port}`);
});
