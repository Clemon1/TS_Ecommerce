import { Router } from "express";
import { loginUsers, registerUsers } from "../controllers/authController";

const router = Router();

router.post("/v1/register", registerUsers);
router.post("/v1/login", loginUsers);

export default router;
