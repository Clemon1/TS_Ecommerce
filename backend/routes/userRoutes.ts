import { Router } from "express";
import {
  changeUserPassword,
  getUser,
  updateUserInfo,
} from "../controllers/userController";
import { isBoth, verifyToken } from "../middlewares/JWT";

const router = Router();

router.get("/v1/users", verifyToken, isBoth, getUser);
router.patch("/v1/users/updateInfo", verifyToken, updateUserInfo);
router.patch("/v1/users/changePassword", verifyToken, changeUserPassword);

export default router;
