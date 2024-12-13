import { AuthErrors } from './types';

export function getAuthError(error: string): string {
  switch (error) {
    case 'CredentialsSignin':
      return AuthErrors.INVALID_CREDENTIALS;
    case 'UserExists':
      return AuthErrors.USER_EXISTS;
    default:
      return AuthErrors.DEFAULT;
  }
}

export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function isStrongPassword(password: string): boolean {
  return password.length >= 8;
}