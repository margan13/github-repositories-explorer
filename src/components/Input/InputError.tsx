import { FieldError } from 'react-hook-form';
import { cn } from 'src/utils';

export interface InputErrorProps {
  error: string | FieldError;
  className?: string;
}

export const InputError = ({ error, className }: InputErrorProps) => (
  <div className={cn('mt-1', className)}>
    <p className="text-xs font-semibold leading-tight text-red-600">
      {typeof error === 'string' ? error : error.message}
    </p>
  </div>
);
