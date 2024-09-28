import { useController, UseControllerProps } from 'react-hook-form';
import { Input, InputProps } from 'src/components/Input';

export type SearchInputProps = UseControllerProps &
  Omit<InputProps, 'error' | 'onChange'>;

export const SearchInput = ({
  name,
  defaultValue,
  ...props
}: SearchInputProps) => {
  const { field, fieldState } = useController({
    name,
    defaultValue,
  });

  return (
    <Input
      {...field}
      name={field.name}
      value={field.value}
      error={fieldState.error}
      placeholder="Enter username"
      autoComplete="off"
      {...props}
    />
  );
};
