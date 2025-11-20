import { type ISignInSchema, signInSchema } from '@/features/auth/schemas/signin.schema';

export { signInSchema, type ISignInSchema };

export const signInInitialValues: ISignInSchema = {
  email: '',
  password: '',
};
