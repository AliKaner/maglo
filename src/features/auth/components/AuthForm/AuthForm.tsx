'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { FormProvider, useForm, type FieldValues } from 'react-hook-form';
import { type ZodType } from 'zod';

import Header from '@/features/auth/components/AuthHeader';
import AuthInput from '@/features/auth/components/AuthInput';
import AuthNavigation from '@/features/auth/components/AuthNavigation';
import ButtonsContainer from '@/features/auth/components/ButtonsContainer';
import FieldsContainer from '@/features/auth/components/FieldsContainer';
import { useAuthFormStore } from '@/features/auth/stores/useAuthFormStore';

import styles from './AuthForm.module.scss';
import { IAuthForm } from './AuthForm.types';

const AuthForm = <T extends FieldValues>({ children, schema, onSubmit, defaultValues }: IAuthForm<T>) => {
  const { setForm, clearForm } = useAuthFormStore();

  const form = useForm<T>({
    resolver: zodResolver(schema as ZodType<T, any>),
    defaultValues,
  });

  useEffect(() => {
    setForm(form);

    return () => {
      clearForm();
    };
  }, [form, setForm, clearForm]);

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={styles.form}>
        {children}
      </form>
    </FormProvider>
  );
};

AuthForm.Header = Header;
AuthForm.FieldsContainer = FieldsContainer;
AuthForm.Input = AuthInput;
AuthForm.ButtonsContainer = ButtonsContainer;
AuthForm.Navigation = AuthNavigation;

export { AuthForm };
