import React, { forwardRef, InputHTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';

import { InputError } from 'src/components/Input/InputError';
import { cn } from 'src/utils';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string | FieldError;
  disabled?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { error, className, disabled, ...props },
  ref,
) {
  return (
    <div className="w-full">
      <div
        className={cn(
          'group flex w-full items-center border border-gray-200 bg-gray-100 px-4 py-2 focus-within:border-gray-300',
          {
            '[&:not(:focus-within)]:hover:border-gray-300': !error && !disabled,
            '!border-red-600': error && !disabled,
            'bg-gray-700': disabled,
          },
          className,
        )}
      >
        <input
          ref={ref}
          type="text"
          disabled={disabled}
          className={cn(
            'm-0 block w-full text-gray-700 border-none bg-transparent bg-clip-padding text-sm font-normal placeholder:text-gray-300 focus:outline-none',
            {
              '!text-red placeholder:!text-red': error && !disabled,
            },
          )}
          {...props}
        />
      </div>

      {error && <InputError error={error} />}
    </div>
  );
});
