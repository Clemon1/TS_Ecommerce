import { z } from "zod";

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/,
);
export const registerSchema = z.object({
  firstName: z
    .string({
      required_error: "First Name is required",
      invalid_type_error: "First Name must be a string",
    })
    .min(2, { message: "Firstname must be 2 or more characters long" }),
  lastName: z
    .string({
      required_error: "Lastname is required",
      invalid_type_error: "last Name must be a string",
    })
    .min(2, { message: "Lastname must be 2 or more characters long" }),
  email: z.string({
    required_error: "Email is required",
    invalid_type_error: "email must be a string",
  }),
  phoneNumber: z.string().regex(phoneRegex, "Invalid phone number"),
  password: z
    .string({
      required_error: "Password is required",
      invalid_type_error: "Password must be a string",
    })
    .min(6, { message: "Password must be 6 or more characters long" }),
});

export const LoginSchema = z.object({
  email: z.string(),
  password: z.string().min(6),
});
