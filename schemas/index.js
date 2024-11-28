import { z } from "zod"

export const SignInSchema = z.object({
    email: z.string().email(),
    password: z.string().min(5, { message: "Must be 5 or more characters long"})
})