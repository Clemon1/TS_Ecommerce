import { Router } from "express";

import {
  getUserCart,
  addToCart,
  increaseCartQuantity,
  decreaseCartQuantity,
  removeCartItems,
  removeAllCartItems,
} from "../controllers/cartController";
import { isUser, verifyToken } from "../middlewares/JWT";

const router = Router();

router.get("/v1/userCart", verifyToken, isUser, getUserCart);
router.post("/v1/add/:productId", verifyToken, isUser, addToCart);
router.patch(
  "/v1/increase/:productId",
  verifyToken,
  isUser,
  increaseCartQuantity,
);
router.patch(
  "/v1/decrease/:productId",
  verifyToken,
  isUser,
  decreaseCartQuantity,
);
router.delete("/v1/remove/:productId", verifyToken, isUser, removeCartItems);
router.delete("/v1/removeAll", verifyToken, isUser, removeAllCartItems);

export default router;
