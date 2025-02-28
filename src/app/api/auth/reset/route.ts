import { NextResponse, NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    // emulating the password reset process

    return NextResponse.redirect(new URL('/report', request.url), 303);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: 'Authentication failed' }, { status: 401 });
  }
}
