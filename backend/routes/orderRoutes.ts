import { Router } from "express";
import {
  createOrder,
  getAllOrder,
  getSingleOrder,
  getUserOrder,
  updateOrderStatus,
} from "../controllers/orderController";
import { isAdmin, isBoth, isUser, verifyToken } from "../middlewares/JWT";

const router = Router();

router.get("/v1/getAllOrder", verifyToken, getAllOrder);
router.get("/v1/getUserOrder", verifyToken, isUser, getUserOrder);
router.get("/v1/singleOrder/:id", verifyToken, isBoth, getSingleOrder);
router.post("/v1/createOrder", verifyToken, createOrder);
router.patch(
  "/v1/updateOrderStatus/:id",
  verifyToken,
  isAdmin,
  updateOrderStatus,
);

export default router;
