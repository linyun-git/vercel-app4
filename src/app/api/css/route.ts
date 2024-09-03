import { NextResponse, NextRequest } from "next/server"

const RANDOM_IMG = 'https://app4.suitesting.dev/api/random-image';

export async function GET(req: NextRequest): Promise<NextResponse> {

    const { searchParams } = new URL(req.url);

    const mailId = searchParams.get('mail_id');
    const tag = searchParams.get('tag');
    console.log(`
        mid: ${mailId}
        tag: ${tag}
        ua: ${req.headers.get('user-agent')}
  	`);

    const headers = new Headers();
    headers.set('Content-Type', 'text/css');

    const css = `
    .${tag}-test {
        width: 0;
        height: 0;
        background-image: url('${RANDOM_IMG}?mail_id=${mailId}&tag=${tag}');
    }
  `;

    return new NextResponse(css, { status: 200, statusText: "OK", headers });
}
