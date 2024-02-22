import { Router } from "express";
import {
  changeUserPassword,
  getUser,
  noOfUserMontly,
  updateUserInfo,
} from "../controllers/userController";
import { isBoth, verifyToken } from "../middlewares/JWT";

const router = Router();

router.get("/v1/users", verifyToken, isBoth, getUser);
router.get("/v1/montlyUsers/:year", verifyToken, noOfUserMontly);
router.patch("/v1/users/updateInfo", verifyToken, updateUserInfo);
router.patch("/v1/users/changePassword", verifyToken, changeUserPassword);

export default router;
