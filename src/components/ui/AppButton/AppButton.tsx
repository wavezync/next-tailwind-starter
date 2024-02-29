import { cn } from '@/src/utils/cn';
import clsx from 'clsx';
import React from 'react';

type ButtonVariants = 'primary' | 'secondary';
type ButtonSizes = 'xs' | 'sm' | 'md' | 'lg';
type ButtonSpinnerLocation = 'start' | 'end';

interface SpinnerProps {
  size?: number;
}

const SpinnerSizesMap = {
  xs: 16,
  sm: 20,
  md: 24,
  lg: 28,
};

const DefaultSpinner = ({ size = SpinnerSizesMap.md }: SpinnerProps) => {
  return (
    <svg
      fill="none"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      className="animate-spin fill-current stroke-current stroke-1"
      width={size}
      height={size}
    >
      <path d="M10 3.5C6.41015 3.5 3.5 6.41015 3.5 10C3.5 10.4142 3.16421 10.75 2.75 10.75C2.33579 10.75 2 10.4142 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 14.4183 14.4183 18 10 18C9.58579 18 9.25 17.6642 9.25 17.25C9.25 16.8358 9.58579 16.5 10 16.5C13.5899 16.5 16.5 13.5899 16.5 10C16.5 6.41015 13.5899 3.5 10 3.5Z" />
    </svg>
  );
};

export interface AppButtonProps extends React.ComponentPropsWithRef<'button'> {
  variant?: ButtonVariants;
  className?: string;
  isLoading?: boolean;
  loadingText?: string;
  outline?: boolean;
  size?: ButtonSizes;
  spinner?: React.ReactElement;
  spinnerLocation?: ButtonSpinnerLocation;
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
}

/**
 * ALWAYS use full tailwind class names, dynamic ones wont work :(
 * enabled modifier only enables certain styles when button is enabled
 * modifier "!" used to override any styles from base(for example in outlined buttons)
 */

const outlineVarientClasses: Record<ButtonVariants, string> = {
  primary:
    'outline-app-primary-outlined enabled:hover:!bg-app-primary-outlined-hover !text-white',
  secondary:
    'outline-app-secondary-outlined enabled:hover:!bg-app-secondary-outlined-hover !text-app-secondary',
};

const classes = {
  base: `font-semibold rounded-lg transition-colors duration-300 focus:ring inline-flex items-center justify-center enabled:hover:shadow-md text-center`,
  variants: {
    primary:
      'bg-app-primary text-app-secondary enabled:hover:bg-app-primary-hover focus:outline-none focus:ring-app-primary-focus',
    secondary:
      'bg-app-secondary text-white enabled:hover:bg-app-secondary-hover focus:outline-none focus:ring-app-secondary-focus',
  },
  disabled:
    'disabled:text-app-disabled-text disabled:bg-app-disabled disabled:outline-1 disabled:outline-app-disabled-text disabled:cursor-not-allowed',
  outline: ({ variant }: AppButtonProps) => {
    return cn(
      `!bg-transparent outline outline-2`,
      variant && outlineVarientClasses[variant],
    );
  },
  sizes: {
    xs: 'text-xs px-2 py-2',
    sm: 'text-sm px-3 py-2',
    md: 'text-md px-6 py-2',
    lg: 'text-lg px-8 py-3',
  },
};

export const AppButton = React.forwardRef<HTMLButtonElement, AppButtonProps>(
  (props: AppButtonProps, ref) => {
    const {
      variant = 'primary',
      size = 'md',
      spinner = <DefaultSpinner size={SpinnerSizesMap[size]} />,
      spinnerLocation = 'start',
      children,
      outline,
      className,
      loadingText,
      isLoading,
      disabled,
      leftIcon,
      rightIcon,
      ...rest
    } = props;

    const isButtonDisabled = disabled || isLoading;

    return (
      <button
        className={cn(
          classes.base,
          classes.variants[variant],
          isButtonDisabled && classes.disabled,
          outline && classes.outline(props),
          size && classes.sizes[size],
          { 'flex-row-reverse': isLoading && spinnerLocation === 'end' },
          className,
        )}
        {...rest}
        ref={ref}
        disabled={isButtonDisabled}
      >
        {!isLoading ? (
          <>
            {!!leftIcon && <span className="mr-2">{leftIcon}</span>}
            {children}
            {!!rightIcon && <span className="ml-2">{rightIcon}</span>}
          </>
        ) : (
          <>
            {spinner}
            {loadingText && (
              <span
                className={clsx(spinnerLocation === 'start' ? 'ml-2' : 'mr-2')}
              >
                {loadingText}
              </span>
            )}
          </>
        )}
      </button>
    );
  },
);
