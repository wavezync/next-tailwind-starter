import React from "react";
import { cn } from "@utils/cn";
import FormErrorAlert from "../Forms/FormAlert/FormAlert";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    const { error, className, type, ...rest } = props;

    return (
      <div className="flex flex-col">
        <input
          type={type ?? "text"}
          ref={ref}
          className={cn(
            "peer",
            "rounded-md border px-2 py-1.5 text-base transition-all",
            "placeholder:text-app-textbox-placeholder",
            "focus:border-app-secondary-focus focus:ring focus:ring-app-secondary-focus focus:ring-opacity-50",
            "bg-app-textbox text-app-primary-text",
            error &&
              "border-app-danger bg-app-danger/20 focus:border-app-danger focus:ring-app-danger",
            className,
          )}
          {...rest}
        />
        {error && <FormErrorAlert message={error} className="mt-1" />}
      </div>
    );
  },
);

Input.displayName = "Input";
