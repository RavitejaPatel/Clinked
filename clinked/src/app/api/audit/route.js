import { NextResponse } from 'next/server';

export async function GET() {
  const API_URL = 'https://api.clinked.com/v3/accounts/21680/groups?page=1&size=100';
  const BEARER_TOKEN = 'fca75494-1254-46df-a88c-ea51ac12a299';

  try {
    const response = await fetch(API_URL, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${BEARER_TOKEN}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: response.statusText },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error('Error fetching API:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
