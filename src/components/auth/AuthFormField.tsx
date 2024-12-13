import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface AuthFormFieldProps {
  id: string;
  label: string;
  type: string;
  error?: string;
  disabled?: boolean;
  register: any;
}

export function AuthFormField({
  id,
  label,
  type,
  error,
  disabled,
  register
}: AuthFormFieldProps) {
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        type={type}
        {...register(id)}
        className="mt-1"
        disabled={disabled}
      />
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
}