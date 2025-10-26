import * as z from "zod";

export const LoginSchema = z.object({
  email: z.email("invalid email").min(1, "Email is required").trim(),
  password: z.string().min(1, "Password is required").trim(),
});

export const SignupSchema = z
  .object({
    name: z.string().min(2, "Name must be at least 2 characters long").trim(),
    email: z.email("Invalid email").min(1, "Email is required").trim(),
    password: z
      .string()
      .min(6, "Password must be at least 6 characters long")
      .regex(
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
        "Password must contain at least one letter and one number"
      )
      .trim(),

    confirmPassword: z
      .string()
      .min(1, "You need to confirm your password")
      .trim(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    error: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type SignupSchemaType = z.infer<typeof SignupSchema>;

export type LoginSchemaType = z.infer<typeof LoginSchema>;
