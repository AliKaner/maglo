import { type FieldValues, type UseFormReturn } from 'react-hook-form';
import { create } from 'zustand';

interface AuthFormState<T extends FieldValues> {
  form: UseFormReturn<T> | null;
  setForm: (form: UseFormReturn<T>) => void;
  clearForm: () => void;
}

export const useAuthFormStore = create<AuthFormState<any>>(set => ({
  form: null,
  setForm: form => set({ form }),
  clearForm: () => set({ form: null }),
}));

export const useSetErrors = (errors: Partial<Record<keyof FieldValues, { message: string }>>) => {
  const form = useAuthFormStore.getState().form;
  if (form) {
    for (const [fieldName, error] of Object.entries(errors)) {
      if (error) {
        form.setError(fieldName as keyof FieldValues, {
          type: 'server',
          message: error.message,
        });
      }
    }
  }
};

export const useIsDisabled = () =>
  useAuthFormStore(state => state.form?.formState.isLoading || state.form?.formState.isSubmitting);
