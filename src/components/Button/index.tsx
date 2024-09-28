import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  forwardRef,
  ReactNode,
} from 'react';
import { useAsyncFn } from 'react-use';
import { cn } from 'src/utils';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    children?: ReactNode;
    full?: boolean;
    loading?: boolean;
  };

export const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(function Button(
  { children, full = true, loading, disabled = loading, className, ...props },
  ref,
) {
  const [state, onClick] = useAsyncFn(
    async (e) => props.onClick?.(e),
    [props.onClick],
  );

  const isLoading = loading ?? state.loading;

  return (
    <button
      // @ts-expect-error
      ref={ref}
      disabled={isLoading || disabled}
      {...props}
      onClick={onClick}
      className={cn(
        'button bg-sky-500 text-white py-2',
        { 'button-full': full },
        className,
      )}
    >
      {children}
    </button>
  );
});
