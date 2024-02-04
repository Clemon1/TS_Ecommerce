import { Request, Response } from "express";
import users from "../models/userModel";
import bcrypt from "bcrypt";
import { registerSchema } from "../middlewares/zodTypes";
import { generateToken } from "../middlewares/JWT";
import { ZodError } from "zod";

// Register Users
export const registerUsers = async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, email, phoneNumber } = registerSchema.parse(
      req.body,
    );
    //checking for existing users
    const existingUsers = await users.findOne({ email });
    if (existingUsers) {
      return res.status(401).json("Email is already in use");
    }
    const saltRound: number = 10;
    const hashPassword = await bcrypt.hash(req.body.password, saltRound);
    const newUser = new users({
      firstName,
      lastName,
      email,
      phoneNumber,
      password: hashPassword,
    });
    const savedUsers = await newUser.save();
    const token = generateToken({ id: savedUsers.id, role: savedUsers.role });

    const { password, ...otherInfo } = savedUsers.toObject();
    res.status(201).json({ otherInfo, token });
  } catch (error: any) {
    if (error instanceof ZodError) {
      // This error is from Zod validation
      console.log("Zod validation error:", error.errors);
      const formattedErrors: any = {};
      error.errors.forEach((err) => {
        const field = err.path.join("."); // Convert path array to string
        formattedErrors[field] = err.message;
      });
      res.status(400).json({ message: formattedErrors });
    } else {
      res.status(500).json({ mesage: error.message });
    }
  }
};

// Login Users
export const loginUsers = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const { email } = req.body;
    // checking if email exists
    const existingUsers = await users.findOne({ email });
    if (!existingUsers) {
      throw new Error("User not found");
    }

    // checking if password is the same in the database
    const comparePassword = await bcrypt.compare(
      req.body.password,
      existingUsers.password,
    );
    if (!comparePassword) {
      throw new Error("Invalid password");
    }

    const { password, ...otherInfo } = existingUsers.toJSON();
    const token = generateToken({
      id: existingUsers.id,
      role: existingUsers.role,
    });
    res.status(200).json({ otherInfo, token });
  } catch (error: any) {
    res.status(500).json({ mesage: error.message });
  }
};
