import { z } from "zod";

const passwordSchema = z
  .string({ required_error: "Password is required" })
  .min(1, "Password is required")
  .min(8, "Password must be more than 8 characters")
  .max(32, "Password must be less than 32 characters")
  .regex(
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
    "Password must contain [ Uppercase letter - Lowercase letter - Number - Special Character #?!@$%^&*- ]"
  );

export const registerSchema = z
  .object({
    username: z
      .string({ required_error: "Username is required" })
      .min(1, "Username is required"),
    firstName: z
      .string({ required_error: "First name is required" })
      .min(1, "First name is required"),
    lastName: z
      .string({ required_error: "Last name is required" })
      .min(1, "Last name is required"),
    email: z
      .string({ required_error: "Email is required" })
      .min(1, "Email is required")
      .email("Invalid email"),
    phone: z
      .string({ required_error: "Phone is required" })
      .min(1, "Phone is required")
      .regex(/^01[0-2,5]{1}[0-9]{8}$/, "Invalid Egypt phone number"),
    password: passwordSchema,
    rePassword: passwordSchema,
  })
  .refine(
    (values) => {
      return values.password === values.rePassword;
    },
    {
      message: "Passwords must match!",
      path: ["rePassword"],
    }
  );

export type registerTypes = z.infer<typeof registerSchema>;
