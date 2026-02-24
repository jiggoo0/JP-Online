import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    // TODO: Implement actual email sending or database saving here
    console.log("Contact form submission:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    return NextResponse.json({
      message: "Your message has been sent successfully.",
    });
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { message: "An error occurred while sending your message." },
      { status: 500 },
    );
  }
}
