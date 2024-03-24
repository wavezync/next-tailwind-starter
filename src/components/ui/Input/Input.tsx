import React from "react";
import { cn } from "@utils/cn";
import FormErrorAlert from "../Forms/FormAlert/FormAlert";

export interface AppInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, AppInputProps>(
  (props, ref) => {
    const { error, className, type, ...rest } = props;

    return (
      <div className="flex flex-col">
        <input
          type={type ?? "text"}
          ref={ref}
          className={cn(
            "peer",
            "form-input rounded-md border px-5 py-[1.35rem] text-base transition-all",
            "border-border-gray placeholder:text-inactive-gray",
            "focus:outline-none  focus:ring-1 focus:ring-red-500",
            "bg-app-textbox text-app-primary-text",
            "mb-2",
            error
              ? "border-app-danger focus:border-app-danger focus:ring-app-danger"
              : "focus:border-primary focus:ring-primary",
            className,
          )}
          {...rest}
        />
        {error && <FormErrorAlert message={error} />}
      </div>
    );
  },
);

Input.displayName = "Input";
