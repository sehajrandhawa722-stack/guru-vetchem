import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Here you would integrate with Google Sheets API
    // For now, just log the data
    console.log('New contact form submission:', body);

    // In production:
    // const { google } = require('googleapis');
    // const auth = new google.auth.GoogleAuth({ ... });
    // const sheets = google.sheets({ version: 'v4', auth });
    // await sheets.spreadsheets.values.append({ ... });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}