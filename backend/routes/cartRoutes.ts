import { Router } from "express";

import { getUserCart, addToCart } from "../controllers/cartController";
import { isUser, verifyToken } from "../middlewares/JWT";

const router = Router();

router.get("/v1/userCart", verifyToken, isUser, getUserCart);
router.post("/v1/add/:productId", verifyToken, isUser, addToCart);

export default router;
