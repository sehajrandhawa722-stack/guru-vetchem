import { NextRequest, NextResponse } from 'next/server';

const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwVi5IxxtIUdB1OWj9NE6fsjTiD7BG1afIN72r6sc-DBAABdyyWy7aTqfuPadw-2Rjg/exec';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const response = await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const result = await response.json();

    if (!response.ok || !result.success) {
      console.error('Apps Script error:', result?.error || 'Unknown error');
      return NextResponse.json({ error: 'Failed to save contact request' }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}