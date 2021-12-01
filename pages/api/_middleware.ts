import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  //Check if Authorization token is present
  const token = req.headers.get("Authorization");
  // No token, return error
  if (!token)
    return new NextResponse("Authorization Required", { status: 401 });
  return NextResponse.next();
}
