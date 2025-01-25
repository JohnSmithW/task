import { NextResponse, NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  // Get cookies from incoming request
  const cookies = request.cookies;
  const user = cookies.get('auth-token')?.value;

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const response = NextResponse.json({ success: true, data: { user } }, { status: 201 });
  response.cookies.set('last-accessed', new Date().toISOString());

  return response;
}
