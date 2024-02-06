import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const secretKey: string = `${process.env.JWT_SECRET}`;
console.log(secretKey);

if (!secretKey) {
  throw new Error("JWT_SECRET not defined in environment variables");
}

type User = string;

type Role = string;

declare global {
  namespace Express {
    interface Request {
      user?: User; // Define the type for req.user
      role?: Role; // Define the type for req.role
    }
  }
}

export const generateToken = ({ id, role }: { id: string; role: string }) => {
  const token = jwt.sign({ id, role }, secretKey, { expiresIn: "30days" });
  return token;
};

export const verifyToken = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const token = req.cookies?.token || req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  jwt.verify(token, secretKey, (err: any, decoded: any) => {
    if (err) {
      return res.status(err).json({ message: "Unauthorized" });
    }

    req.user = decoded?.id;

    req.role = decoded?.role;
    next();
  });
};

export const isAdmin = (req: Request, res: Response, next: NextFunction) => {
  if (req.role !== "ADMIN") {
    return res
      .status(401)
      .json({
        message: "You are not authorized as an admin use this endpoint",
      });
  }
  next();
};
export const isUser = (req: Request, res: Response, next: NextFunction) => {
  if (req.role !== "USER") {
    return res
      .status(401)
      .json({ message: "You are authorized as a user to use this endpoint" });
  }
  next();
};
