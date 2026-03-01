import * as productsController from "../controllers/productscontroler.js";
import express from "express";

const router = express.Router();

router.get("/products", productsController.getProducts);
router.get("/products/:id", productsController.getProductById);

export default router;