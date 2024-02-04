import { Router } from "express";
import {
  createProducts,
  getAllProducts,
  getSingleProducts,
} from "../controllers/productController";
import { upload } from "../middlewares/upload";

const router = Router();

router.get("/v1/allProduct", getAllProducts);
router.get("/v1/:id", getSingleProducts);
router.post(
  "/v1/createProduct",
  upload.fields([
    { name: "image", maxCount: 1 },
    { name: "otherPhoto", maxCount: 5 },
  ]),
  createProducts,
);

export default router;
