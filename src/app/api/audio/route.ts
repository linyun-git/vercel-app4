import { NextResponse, NextRequest } from "next/server"

export async function GET(req: NextRequest): Promise<NextResponse> {

    return new NextResponse(undefined, { status: 204 });
}
