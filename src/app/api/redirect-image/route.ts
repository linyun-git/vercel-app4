import { NextResponse, NextRequest } from "next/server"

const RANDOM_IMG = 'https://picsum.photos/200/300';
const REDIRECTED = 'https://app3.suitesting.dev/api/redirect-image?redirect_count=1';

export async function GET(req: NextRequest): Promise<NextResponse> {

    const { searchParams } = new URL(req.url);
    const redirectCount = searchParams.get('redirect_count');
    const pos = searchParams.get('from');
    const mailId = searchParams.get('mail_id');
    const cssId = searchParams.get('css_id');

    if (!redirectCount) {
        const imageId = Date.now() % 20;
        console.log(`
            redirect: true
            pos: ${pos}
            ${mailId ? `mid: ${mailId}` : ''}
            ${cssId ? `cid: ${cssId}` : ''}
            iid: ${imageId}
            f-ip: ${req.headers.get('x-forwarded-for')}
            ua: ${req.headers.get('user-agent')}
        `);
        return NextResponse.redirect(`${REDIRECTED}&image_id=${imageId}&${searchParams.toString()}`);
    }

    const imageId = searchParams.get('image_id');

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
    const headers = new Headers();
    headers.set("Content-Type", res.headers.get('Content-Type'));
    headers.set("Content-Disposition", res.headers.get('Content-Disposition'));
    headers.set("Content-Length", res.headers.get('Content-Length'));
    return new NextResponse(blob, { status: 200, statusText: "OK", headers });
}
