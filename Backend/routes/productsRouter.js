import * as productsController from "../controllers/productscontroler.js";
import express from "express";

const router = express.Router();

router.get("/products", productsController.getProducts);
router.get("/products/:id", productsController.getProductById);
router.post("/products", productsController.addProduct);
router.put("/products/:id", productsController.updateProduct);
router.delete("/products/:id", productsController.deleteProduct);

export default router;