interface AuthFormErrorProps {
  error?: string;
}

export function AuthFormError({ error }: AuthFormErrorProps) {
  if (!error) return null;
  
  return (
    <div className="text-sm text-red-600 text-center">
      {error}
    </div>
  );
}