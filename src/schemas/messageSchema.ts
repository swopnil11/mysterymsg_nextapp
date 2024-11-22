import {z} from "zod"

export const messageSchema = z.object({
    content: z
        .string()
        .min(10, {message:  "Username must be at least of 10 characters"})
        .max(300, {message: "Username must be no longer than 300 characters"})
})