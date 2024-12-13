import { getServerSession } from 'next-auth';
import { authConfig } from './config';
import type { Session } from 'next-auth';
import type { SessionUser } from './types';

export async function getSession(): Promise<Session | null> {
  return await getServerSession(authConfig);
}

export async function getCurrentUser(): Promise<SessionUser | null> {
  const session = await getSession();
  if (!session?.user?.id) {
    return null;
  }
  
  return {
    id: session.user.id,
    email: session.user.email ?? '',
    name: session.user.name
  };
}

export async function requireAuth(): Promise<Session> {
  const session = await getSession();
  
  if (!session?.user?.id) {
    throw new Error('Unauthorized');
  }
  
  return session;
}