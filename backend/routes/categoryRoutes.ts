import { Router } from "express";
import {
  getAllCategories,
  getSingleCategory,
  getProductCategories,
  createCategory,
  addSubCategory,
} from "../controllers/categories";
import { categoryUpload } from "../middlewares/categoryImages";
const router = Router();

router.get("/v1/all", getAllCategories);
router.get("/v1/product", getProductCategories);
router.get("/v1/:id", getSingleCategory);
router.post("/v1/create", categoryUpload.single("catImage"), createCategory);
router.patch(
  "/v1/:categoryId",
  categoryUpload.single("subImage"),
  addSubCategory,
);

export default router;
