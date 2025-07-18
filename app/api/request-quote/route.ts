// app/api/request-quote/route.ts
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const formData = await req.formData()

    const plainData: Record<string, string> = {}
    formData.forEach((value, key) => {
      plainData[key] = value.toString()
    })

    // Convert to JSON-compatible object (skip file for now)
    const jsonData = { ...plainData }
    delete jsonData.sample

    const formspreeRes = await fetch("https://formspree.io/f/your_form_id", {
      method: "POST",
      headers: { Accept: "application/json", "Content-Type": "application/json" },
      body: JSON.stringify(jsonData)
    })

    if (!formspreeRes.ok) {
      return NextResponse.json({ error: "Formspree error" }, { status: 500 })
    }

    return NextResponse.json({ message: "Form submitted successfully" }, { status: 200 })
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}
