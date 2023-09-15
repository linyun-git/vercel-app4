import { NextResponse, NextRequest } from "next/server"

const GIF = 'https://app3.suitesting.dev/assets/test.gif';

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

    const res = await fetch(GIF);
    const blob = await res.blob();
    const headers = new Headers();
    headers.set("Content-Type", res.headers.get('Content-Type'));
    headers.set("Content-Disposition", res.headers.get('Content-Disposition'));
    headers.set("Content-Length", res.headers.get('Content-Length'));
    return new NextResponse(blob, { status: 200, statusText: "OK", headers });
}
