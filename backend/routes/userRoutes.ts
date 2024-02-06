import { Router } from "express";
import { getUser } from "../controllers/userController";
import { isAdmin, isUser, verifyToken } from "../middlewares/JWT";

const router = Router();

router.get("/v1/users", verifyToken, isUser, getUser);

export default router;
