import { AuthFormWrapper } from '@/components/auth/AuthFormWrapper';
import SignInForm from '@/components/auth/SignInForm';

export default function SignInPage() {
  return (
    <AuthFormWrapper title="Sign in to your account">
      <SignInForm />
    </AuthFormWrapper>
  );
}