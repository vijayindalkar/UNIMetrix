'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signInSchema, type SignInFormData } from '@/lib/auth/validation';
import { AuthFormField } from './AuthFormField';
import { AuthFormError } from './AuthFormError';
import { AuthSubmitButton } from './AuthSubmitButton';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function SignInForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit = async (data: SignInFormData) => {
    try {
      setIsLoading(true);
      setError('');
      
      const result = await signIn('credentials', {
        redirect: false,
        email: data.email,
        password: data.password,
      });

      if (result?.error) {
        setError('Invalid email or password');
        return;
      }

      router.push('/');
      router.refresh();
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setError('Failed to sign in. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
      <div className="space-y-4">
        <AuthFormField
          id="email"
          label="Email address"
          type="email"
          error={errors.email?.message}
          disabled={isLoading}
          register={register}
        />

        <AuthFormField
          id="password"
          label="Password"
          type="password"
          error={errors.password?.message}
          disabled={isLoading}
          register={register}
        />
      </div>

      <AuthFormError error={error} />

      <AuthSubmitButton
        isLoading={isLoading}
        loadingText="Signing in..."
        text="Sign in"
      />

      <div className="text-sm text-center">
        <Link href="/auth/signup" className="text-indigo-600 hover:text-indigo-500">
          Don&apos;t have an account? Sign up
        </Link>
      </div>
    </form>
  );
}