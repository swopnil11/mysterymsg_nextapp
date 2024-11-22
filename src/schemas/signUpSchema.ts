import {z} from 'zod'

export const UserNameValidation = z
    .string()
    .min(2, "Username must be at least 2 characters")
    .max(20, "Username must be no more than 20 characters")
    .regex(/^[a-zA-Z0-9_]+$/, "Username must not contain special characters")


export const signUpValidation = z.object({
    userName: UserNameValidation,
    email: z.string().email({message: 'Invalid Email Address'}),
    password: z.string().min(6, {message: "Password must be at 6 characters"})
})