'use client';

import { AuthForm } from '@/features/auth/components/AuthForm';
import { useSignUp } from '@/features/auth/hooks';
import { type ISignUpSchema, signUpInitialValues, signUpSchema } from '@/features/auth/types/signup.types';
import { ROUTES } from '@/shared/constants/routes';
import styles from './SignUpPageContent.module.scss';
import { Button, Icon } from '@/shared/components';

const SignUpPageContent = () => {
  const { signUp, isLoading } = useSignUp();

  const handleSignUpSubmit = (data: ISignUpSchema) => signUp(data);

  return (
    <section className={styles.signUpPageContent}>
      <AuthForm<ISignUpSchema> schema={signUpSchema} onSubmit={handleSignUpSubmit} defaultValues={signUpInitialValues}>
        <AuthForm.Header title="Create an Account" subtitle="Welcome back! Please enter your details" />
        <AuthForm.FieldsContainer>
          <AuthForm.Input
            id="fullName"
            name="fullName"
            label="Full Name"
            placeholder="Enter your full name"
            disabled={isLoading}
          />
          <AuthForm.Input id="email" name="email" label="Email" placeholder="Enter your email" disabled={isLoading} />
          <AuthForm.Input
            id="password"
            name="password"
            label="Password"
            placeholder="•••••••"
            type="password"
            disabled={isLoading}
          />
        </AuthForm.FieldsContainer>
        <AuthForm.ButtonsContainer>
          <Button type="submit" text="Create Account" variant="primary" isLoading={isLoading} />
          <Button type="button" text="Sign up with google" variant="secondary" icon={<Icon name="Google" />} isLoading={isLoading} />
        </AuthForm.ButtonsContainer>
        <AuthForm.Navigation text="Already have an account?" linkText="Sign in" to={ROUTES.AUTH.SIGN_IN} />
      </AuthForm>
    </section>
  );
};

export default SignUpPageContent;
