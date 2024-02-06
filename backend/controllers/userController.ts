import { Request, Response } from "express";
import users from "../models/userModel";

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
