import { Schema, model, Types } from "mongoose";

type user = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  password: string;
  role: string;
  wishlist: [Types.ObjectId];
};

const userSchema = new Schema<user>(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    role: {
      type: String,
      enum: ["ADMIN", "USER"],
      default: "USER",
      required: true,
    },
    wishlist: [
      {
        type: Schema.Types.ObjectId,
        ref: "products",
      },
    ],
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

const users = model("users", userSchema);

export default users;
