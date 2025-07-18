// Backend API route
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const formData = await req.json()

    // Send data to Formspree
    const response = await fetch('https://formspree.io/f/your_form_id', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })

    if (!response.ok) {
      return NextResponse.json({ error: 'Formspree error' }, { status: 500 })
    }

    return NextResponse.json({ message: 'Form submitted successfully' }, { status: 200 })
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
