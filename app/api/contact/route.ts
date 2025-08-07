import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const formData = await req.json();

    // Send to Formspree
    const formspreeRes = await fetch(process.env.FORMSPREE_ENDPOINT!, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (!formspreeRes.ok) {
      return NextResponse.json({ error: 'Formspree error' }, { status: 500 });
    }

    return NextResponse.json({ message: 'Message sent successfully' }, { status: 200 });
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
