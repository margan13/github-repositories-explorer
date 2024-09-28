import { FC, FormEventHandler, ReactNode } from 'react';
import { FormProvider, UseFormReturn } from 'react-hook-form';

import { Button, ButtonProps } from 'src/components/Button';
import { cn } from 'src/utils';

export interface FormProps {
  id?: string;
  onSubmit: (values: any) => unknown | Promise<unknown>;
  onCancel?: (force?: boolean) => void;
}

interface ContainerProps extends Omit<FormProps, 'onSubmit'> {
  form: UseFormReturn<any>;
  children: ReactNode;
  onSubmit: FormEventHandler<HTMLFormElement>;
  className?: string;
}

const Container = ({
  id,
  form,
  children,
  className,
  onSubmit,
}: ContainerProps) => {
  return (
    <FormProvider {...form}>
      <form
        id={id}
        className={cn('flex flex-1 flex-col gap-4', className)}
        onSubmit={(e) => {
          e.preventDefault();

          if (!id || (e.target instanceof HTMLElement && e.target.id === id)) {
            onSubmit(e);
          }
        }}
      >
        {children}
      </form>
    </FormProvider>
  );
};

const SubmitButton: FC<ButtonProps> = ({ className, ...props }) => (
  <Button type="submit" className={cn('font-light', className)} {...props} />
);

export const Form = Object.assign(Container, {
  Submit: SubmitButton,
});
