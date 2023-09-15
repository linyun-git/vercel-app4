import { NextResponse, NextRequest } from "next/server"

const RANDOM_IMG = 'https://picsum.photos/200/300';

export async function GET(req: NextRequest): Promise<NextResponse> {

    const { searchParams } = new URL(req.url);
    const pos = searchParams.get('from');
    const mailId = searchParams.get('mail_id');
    const cssId = searchParams.get('css_id');
    const imageId = Date.now() % 20;

    console.log(`
        pos: ${pos}
        ${mailId ? `mid: ${mailId}` : ''}
        ${cssId ? `cid: ${cssId}` : ''}
        iid: ${imageId}
        f-ip: ${req.headers.get('x-forwarded-for')}
        ua: ${req.headers.get('user-agent')}
    `);

    const res = await fetch(RANDOM_IMG);
    const blob = await res.blob();

    return new NextResponse(blob, { status: 200, statusText: "OK", headers: res.headers });
}
