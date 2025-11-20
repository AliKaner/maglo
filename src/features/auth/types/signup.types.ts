import { type ISignUpSchema, signUpSchema } from '@/features/auth/schemas/signup.schema';

export { signUpSchema, type ISignUpSchema };

export const signUpInitialValues: ISignUpSchema = {
  fullName: '',
  email: '',
  password: '',
};
