import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Server up and running on port", process.env.PORT || 5000);
});
