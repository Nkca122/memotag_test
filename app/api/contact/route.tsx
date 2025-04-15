import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.json();
  console.log("Received data:", data);

  // Optionally store to DB here

  return NextResponse.json({ message: "Data received" });
}
