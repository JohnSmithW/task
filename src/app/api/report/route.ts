import { NextResponse, NextRequest } from 'next/server';

const formatDateToYYYYMMDD = (isoDateString: string): string => {
  const date = new Date(isoDateString);

  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // Months are 0-based
  const day = String(date.getUTCDate()).padStart(2, '0');

  return `${year}/${month}/${day}`;
};

const generateUniqueId = (): string => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
};

export async function GET(request: NextRequest) {
  try {
    const reports = JSON.parse(request.cookies.get('reports')?.value || '[]');

    const response = NextResponse.json({ ok: true, data: reports }, { status: 201 });

    return response;
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: 'Authentication failed' }, { status: 401 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const report = {
      id: generateUniqueId(),
      startDate: formatDateToYYYYMMDD(data.date[0]),
      endDate: formatDateToYYYYMMDD(data.date[1]),
      createdAt: formatDateToYYYYMMDD(new Date().toISOString()),
      name: data.name,
      userName: data.userName,
    };

    const reports = JSON.parse(request.cookies.get('reports')?.value || '[]');

    const response = NextResponse.json({ ok: true, data: report }, { status: 201 });

    console.log(reports, Array.isArray(reports));
    if (reports && Array.isArray(reports)) {
      reports.push(report);
    }

    // Set cookie
    response.cookies.set({
      name: 'reports',
      value: JSON.stringify(reports || [report]),
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
