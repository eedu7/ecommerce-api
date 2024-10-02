import {z} from "zod";

export const signUpFormSchema = z.object({
    name: z.string(), email: z.string().email(), password: z.string(), confirmPassword: z.string(),
})

export const signInFormSchema = z.object({
    email: z.string().email(), password: z.string()
})