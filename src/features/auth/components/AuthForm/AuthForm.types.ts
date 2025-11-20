import type { DefaultValues, FieldValues, SubmitHandler } from 'react-hook-form';
import type { ZodType } from 'zod';

export interface IAuthForm<T extends FieldValues> {
  children: React.ReactNode;
  schema: ZodType<T>;
  onSubmit: SubmitHandler<T>;
  defaultValues: DefaultValues<T>;
}
