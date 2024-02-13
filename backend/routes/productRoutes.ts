import { Router } from "express";
import {
  createProducts,
  filterProducts,
  getAllProducts,
  getSingleProducts,
  searchProducts,
  updateProducts,
  wishlistProducts,
} from "../controllers/productController";
import { upload } from "../middlewares/upload";
import { isAdmin, isBoth, isUser, verifyToken } from "../middlewares/JWT";

const router = Router();

router.get("/v1/allProduct", verifyToken, getAllProducts);
router.get("/v1/search", searchProducts);
router.get("/v1/filter", filterProducts);
router.get("/v1/:id", verifyToken, isBoth, getSingleProducts);

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

router.patch("/v1/updateProduct/:id", verifyToken, isAdmin, updateProducts);

export default router;
