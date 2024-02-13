import { Router } from "express";
import { getUser } from "../controllers/userController";
import { isBoth, verifyToken } from "../middlewares/JWT";

const router = Router();

router.get("/v1/users", verifyToken, isBoth, getUser);

export default router;
