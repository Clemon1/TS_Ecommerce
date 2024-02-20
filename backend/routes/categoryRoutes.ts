import { Router } from "express";
import {
  getAllCategories,
  getSingleCategory,
  getProductCategories,
  createCategory,
  addSubCategory,
} from "../controllers/categories";

const router = Router();

router.get("/v1/all", getAllCategories);
router.get("/v1/product", getProductCategories);
router.get("/v1/:id", getSingleCategory);
router.post("/v1/create", createCategory);
router.patch("/v1/:categoryId", addSubCategory);

export default router;
