import { cn } from "@utils/cn";

export interface FormErrorAlertProps {
  message: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

export default function FormErrorAlert({
  message,
  icon,
  className,
}: FormErrorAlertProps) {
  return (
    <span
      className={cn(
        "flex items-center text-left align-middle text-xs text-app-danger peer-invalid:visible",
        className,
      )}
    >
      {icon && <div className="mr-2">{icon}</div>}
      <div>{message}</div>
    </span>
  );
}
