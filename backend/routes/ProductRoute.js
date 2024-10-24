import { Router } from "express";
import {
  createProducts,
  getProducts,
  getProductsById,
  updateProducts,
  deleteProducts,
} from "../controllers/ProductController.js";
const router = Router();

router.get("/", getProducts);
router.get("/:id", getProductsById);
router.post("/", createProducts);
router.put("/:id", updateProducts);
router.delete("/:id", deleteProducts);

export default router;
