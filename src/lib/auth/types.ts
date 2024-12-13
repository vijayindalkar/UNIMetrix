import type { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  interface Session extends DefaultSession {
    user: {
      id: string;
    } & DefaultSession['user']
  }

  interface JWT {
    sub: string;
  }
}

export interface SessionUser {
  id: string;
  email: string;
  name?: string | null;
}

export const AuthErrors = {
  DEFAULT: 'Something went wrong. Please try again.',
  INVALID_CREDENTIALS: 'Invalid email or password',
  USER_EXISTS: 'An account with this email already exists',
  REGISTRATION_FAILED: 'Failed to create account. Please try again.',
} as const;