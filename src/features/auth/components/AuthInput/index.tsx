import { useFormContext } from 'react-hook-form';

import { Input } from '@/shared/components';
import { type InputProps } from '@/shared/components/Input';

export interface AuthInputProps extends InputProps {
  name: string;
  label: string;
  error?: string;
}

const AuthInput = ({ name, ...rest }: AuthInputProps) => {
  const { register, formState } = useFormContext();
  const error = formState.errors[name]?.message as string;

  return <Input {...rest} {...register(name)} error={error} />;
};

export default AuthInput;
