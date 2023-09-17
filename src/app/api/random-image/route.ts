import { NextResponse, NextRequest } from "next/server"

const RANDOM_IMG = 'https://picsum.photos/200/300';

export async function GET(req: NextRequest): Promise<NextResponse> {

    const { searchParams } = new URL(req.url);
    const mailId = searchParams.get('mail_id');
    const tag = searchParams.get('tag');

    console.log(`
        mid: ${mailId}
        tag: ${tag}
        f-ip: ${req.headers.get('x-forwarded-for')}
        ua: ${req.headers.get('user-agent')}
    `);

    const res = await fetch(RANDOM_IMG);
    const blob = await res.blob();
    const headers = new Headers();
    headers.set("Content-Type", res.headers.get('Content-Type'));
    headers.set("Content-Disposition", res.headers.get('Content-Disposition'));
    headers.set("Content-Length", res.headers.get('Content-Length'));
    return new NextResponse(blob, { status: 200, statusText: "OK", headers });
}
