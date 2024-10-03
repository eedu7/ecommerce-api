import {z} from "zod";

export const signUpFormSchema = z.object({
    name: z.string(), email: z.string().email(), password: z.string(), confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Password do not match", path: ["confirmPassword"],
});

export const signInFormSchema = z.object({
    email: z.string().email(), password: z.string()
});