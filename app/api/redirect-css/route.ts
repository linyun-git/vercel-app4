import { NextResponse, NextRequest } from "next/server"

const REDIRECTED = 'https://app3.suitesting.dev/api/redirect-css?redirect_count=1';

const RANDOM_IMAGE = 'https://app3.suitesting.dev/api/random-image?from=redirect-css';

export async function GET(req: NextRequest): Promise<NextResponse> {

    const { searchParams } = new URL(req.url);
    const mailId = searchParams.get('mail_id');
    const redirectCount = searchParams.get('redirect_count');

    if (!redirectCount) {
        const cssId = Date.now() % 20;
        console.log(`
            redirect: true
            ${mailId ? `mid: ${mailId}` : ''}
            cid: ${cssId}
            f-ip: ${req.headers.get('x-forwarded-for')}
            ua: ${req.headers.get('user-agent')}
        `);
        return NextResponse.redirect(`${REDIRECTED}&css_id=${cssId}&${searchParams.toString()}`);
    }

    const cssId = searchParams.get('css_id');
    console.log(`
        ${mailId ? `mid: ${mailId}` : ''}
        ${cssId ? `cid: ${cssId}` : ''}
        f-ip: ${req.headers.get('x-forwarded-for')}
        ua: ${req.headers.get('user-agent')}
    `);

    const headers = new Headers();
    headers.set('Content-Type', 'text/css');

    const css = `
        .redirect-css-img {
            background-image: url('${RANDOM_IMAGE}&mail_id=${mailId}&css_id=${cssId}');
        }
    `;

    return new NextResponse(css, { status: 200, statusText: "OK", headers });
}
