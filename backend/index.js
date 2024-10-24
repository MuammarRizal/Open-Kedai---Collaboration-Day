import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import ProductRoute from "./routes/ProductRoute.js";
dotenv.config();

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.use("/api/products", ProductRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log("Server up and running on port", process.env.PORT || 5000);
});
