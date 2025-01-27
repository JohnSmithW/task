import { NextResponse, NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const { username } = data;

    const response = NextResponse.json({ ok: true }, { status: 201 });

    // Set cookie
    response.cookies.set({
      name: 'user',
      value: username,
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: '/',
    });

    return response;
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: 'Authentication failed' }, { status: 401 });
  }
}
