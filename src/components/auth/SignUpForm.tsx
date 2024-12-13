'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signUpSchema, type SignUpFormData } from '@/lib/auth/validation';
import { AuthFormField } from './AuthFormField';
import { AuthFormError } from './AuthFormError';
import { AuthSubmitButton } from './AuthSubmitButton';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function SignUpForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async (data: SignUpFormData) => {
    try {
      setIsLoading(true);
      setError('');
      
      // TODO: Implement your registration API call here
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          password: data.password,
        }),
      });

      if (!response.ok) {
        throw new Error('Registration failed');
      }

      router.push('/auth/signin');
      
    } catch (err) {
      setError('Failed to create account. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
      <div className="space-y-4">
        <AuthFormField
          id="name"
          label="Full name"
          type="text"
          error={errors.name?.message}
          disabled={isLoading}
          register={register}
        />

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

        <AuthFormField
          id="confirmPassword"
          label="Confirm password"
          type="password"
          error={errors.confirmPassword?.message}
          disabled={isLoading}
          register={register}
        />
      </div>

      <AuthFormError error={error} />

      <AuthSubmitButton
        isLoading={isLoading}
        loadingText="Creating account..."
        text="Create account"
      />

      <div className="text-sm text-center">
        <Link href="/auth/signin" className="text-indigo-600 hover:text-indigo-500">
          Already have an account? Sign in
        </Link>
      </div>
    </form>
  );
}