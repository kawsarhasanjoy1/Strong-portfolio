import { z } from "zod";

export const registerSchema = z.object({
  username: z.string().min(1, { message: "Name must required" }),
  email: z.string().email({ message: "Please provide valid email" }),
  password: z
    .string()
    .min(6, { message: "Password must be 6 characters long" })
    .max(20, { message: "Password must be 20 characters low" }),
});

export const loginSchema = z.object({
  email: z.string().email({ message: "Please provide your valid email" }),
  password: z
    .string()
    .min(1, { message: "password must be 6 character longer" })
    .max(20, { message: "password must be 20 character lower" }),
});
