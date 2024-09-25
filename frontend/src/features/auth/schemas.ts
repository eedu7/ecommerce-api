import {z} from "zod";

export const signInFormSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8, {
        message: "Password must be at least 8 characters"
    }).max(16,
        {
            message: "Password must be at most 16 characters"
        })
})