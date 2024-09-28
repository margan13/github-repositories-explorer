import { FC, ReactNode } from 'react';
import { cn } from 'src/utils';

export interface InputLabelProps {
  children: ReactNode;
  htmlFor?: string;
  className?: string;
}

export const InputLabel: FC<InputLabelProps> = ({
  children,
  className,
  htmlFor,
}) => (
  <label
    htmlFor={htmlFor}
    className={cn('mb-1 inline-block text-xs', className)}
  >
    {children}
  </label>
);
