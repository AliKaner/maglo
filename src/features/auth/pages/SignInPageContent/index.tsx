'use client';

import { AuthForm } from '@/features/auth/components/AuthForm';
import { useSignIn } from '@/features/auth/hooks';
import { signInInitialValues, signInSchema, type ISignInSchema } from '@/features/auth/types/signin.types';
import { ROUTES } from '@/shared/constants/routes';
import styles from './SignInPageContent.module.scss';
import { Button, Icon } from '@/shared/components';

const SignInPageContent = () => {
  const { signIn, isLoading } = useSignIn();
  const handleSignInSubmit = (data: ISignInSchema) => signIn(data);

  return (
    <section className={styles.signInPageContent}>
      <AuthForm<ISignInSchema> schema={signInSchema} onSubmit={handleSignInSubmit} defaultValues={signInInitialValues}>
        <AuthForm.Header title="Sign In" subtitle="Welcome Back! Please enter your details to sign in" />
        <AuthForm.FieldsContainer>
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
          <Button type="submit" text="Sign In" variant="primary" isLoading={isLoading} />
          <Button
            type="button"
            text={'Sign in with google'}
            variant="secondary"
            icon={<Icon name="Google" />}
            disabled={isLoading}
          />
        </AuthForm.ButtonsContainer>
        <AuthForm.Navigation text="Don't have an account?" linkText="Sign up" to={ROUTES.AUTH.SIGN_UP} />
      </AuthForm>
    </section>
  );
};

export default SignInPageContent;
