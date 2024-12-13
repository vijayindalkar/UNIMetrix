import { AuthFormWrapper } from '@/components/auth/AuthFormWrapper';
import SignUpForm from '@/components/auth/SignUpForm';

export default function SignUpPage() {
  return (
    <AuthFormWrapper title="Create your account">
      <SignUpForm />
    </AuthFormWrapper>
  );
}