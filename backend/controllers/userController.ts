import { Request, Response } from "express";
import users from "../models/userModel";
import bcrypt from "bcrypt";

// checking to see which user is logged in
export const getUser = async (req: Request, res: Response) => {
  try {
    const currentUser = req.user;
    console.log(currentUser);

    if (!currentUser) throw new Error("User not found");
    const loggedInUser = await users
      .findById(currentUser, "-password")
      .populate("wishlist")
      .exec();

    res.status(200).json(loggedInUser);
  } catch (err: any) {
    res.status(500).json(err.message);
  }
};

// Updating user information
export const updateUserInfo = async (req: Request, res: Response) => {
  try {
    const currentUser = req.user;
    if (!currentUser) throw new Error("User not found");
    const updateUser = await users.findByIdAndUpdate(
      currentUser,
      {
        $set: req.body,
      },
      { new: true },
    );
    res.status(200).json(updateUser);
  } catch (err: any) {
    res.status(500).json(err.message);
  }
};

// Change user password
export const changeUserPassword = async (req: Request, res: Response) => {
  try {
    const { oldPassword, newPassword } = req.body;
    if (!oldPassword || !newPassword) {
      return res.status(401).json("Input valid password");
    }
    const userId = req.user;
    const currentUser = await users.findById(userId);
    // check if current user exists
    if (!currentUser) {
      res.status(401).json("User not found");
    }
    const validateOldPassword = bcrypt.compare(
      oldPassword,
      //@ts-ignore
      currentUser?.password,
    );
    // check if the old password is correct
    if (!validateOldPassword) {
      res.status(401).json("Invalid old password");
    }
    const hashedNewPassword = await bcrypt.hash(newPassword, 10);

    const updatePassword = await users.findByIdAndUpdate(userId, {
      password: hashedNewPassword,
    });

    res.status(200).json("Password updated successfully");
  } catch (err: any) {}
};
