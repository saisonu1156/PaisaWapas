import express from "express";
import { getProducts, createProduct, deleteProduct, upload ,updateProduct } from "../controllers/productController.js";

const router = express.Router();

router.get("/", getProducts);

router.post("/", upload.single("image"), createProduct);

router.delete("/:id", deleteProduct);

router.put("/:id", updateProduct);

export default router;
