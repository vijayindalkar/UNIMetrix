import { NextResponse } from 'next/server';
import { AuthErrors } from '@/lib/auth/types';
import { isValidEmail, isStrongPassword } from '@/lib/auth/utils';

export async function POST(request: Request) {
  try {
    const { email, password, name } = await request.json();

    // Validate input
    if (!email || !password || !name) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    if (!isStrongPassword(password)) {
      return NextResponse.json(
        { error: 'Password must be at least 8 characters' },
        { status: 400 }
      );
    }

    // TODO: Add your user creation logic here
    // const user = await createUser({ email, password, name });

    return NextResponse.json(
      { message: 'User registered successfully' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { error: AuthErrors.REGISTRATION_FAILED },
      { status: 500 }
    );
  }
}