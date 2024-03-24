export interface FormErrorAlertProps {
  message: React.ReactNode;
  icon?: React.ReactNode;
}

export default function FormErrorAlert({ message, icon }: FormErrorAlertProps) {
  return (
    <span className="text-error-red flex items-center text-left align-middle text-xs peer-invalid:visible">
      {icon && <div className="mr-2">{icon}</div>}
      <div>{message}</div>
    </span>
  );
}
