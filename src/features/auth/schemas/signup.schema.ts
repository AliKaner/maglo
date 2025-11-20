import z from 'zod';

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

export const signUpSchema = z.object({
  fullName: z.string().min(2, 'Your full name must be at least 2 characters long'),
  email: z.email('Invalid email address'),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters long')
    .refine(val => passwordRegex.test(val), {
      message: 'Password must contain at least one lowercase letter, one uppercase letter, and one number.',
    }),
});

export type ISignUpSchema = z.infer<typeof signUpSchema>;
