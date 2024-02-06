import { Router } from "express";
import {
  createProducts,
  getAllProducts,
  getSingleProducts,
  updateProducts,
  wishlistProducts,
} from "../controllers/productController";
import { upload } from "../middlewares/upload";
import { isUser, verifyToken } from "../middlewares/JWT";

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
router.patch(
  "/v1/wishlistProduct/:productId",
  verifyToken,
  isUser,
  wishlistProducts,
);

router.patch("/v1/updateProduct/:id", updateProducts);

export default router;
