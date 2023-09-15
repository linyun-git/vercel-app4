import { NextResponse, NextRequest } from "next/server"

const RANDOM_IMG = 'https://app3.suitesting.dev/api/random-image?from=css';
const REDIRECT_JPG = 'https://app3.suitesting.dev/api/redirect-image?from=css';
const GIF = 'https://app3.suitesting.dev/api/img-gif?from=css';

export async function GET(req: NextRequest): Promise<NextResponse> {

    const { searchParams } = new URL(req.url);

    const mailId = searchParams.get('mail_id');
    const cssId = Date.now() % 20;
    console.log(`
        mid: ${mailId}
        cid: ${cssId}
        f-ip: ${req.headers.get('x-forwarded-for')}
        ua: ${req.headers.get('user-agent')}
  	`);

    const headers = new Headers();
    headers.set('Content-Type', 'text/css');

    const css = `
    .random-img {
        background-image: url('${RANDOM_IMG}&mail_id=${mailId}&css_id=${cssId}');
    }
    .redirect-img {
        background-image: url('${REDIRECT_JPG}&mail_id=${mailId}&css_id=${cssId}');
    }
    .gif-img {
        background-image: url('${GIF}&mail_id=${mailId}&css_id=${cssId}');
        width: 600px;
        height: 441px;
    }
    .border {
        border: 2px solid blue;
    }
    body::after {
        content: 'cssId: ${cssId}';
    }
  `;

    return new NextResponse(css, { status: 200, statusText: "OK", headers });
}
