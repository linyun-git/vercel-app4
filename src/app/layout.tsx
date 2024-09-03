/* eslint-disable @next/next/no-img-element */
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

function createCss(mailId: number) {
  return `
  @media screen and (max-width: 600px) {
    .mobile-test {
      width: 0px;
      height: 0px;
      background-image: url('https://app4.suitesting.dev/api/random-image?mail_id=${mailId}&tag=mobile');
    }
  }
  @media screen and (min-width: 600px) {
    .desktop-test {
      width: 0px;
      height: 0px;
      background-image: url('https://app4.suitesting.dev/api/random-image?mail_id=${mailId}&tag=desktop');
    }
  }

  .lang-test:lang(en) {
    width: 0px;
    height: 0px;
    background-image: url('https://app4.suitesting.dev/api/random-image?mail_id=${mailId}&tag=lang');
  }

  @media(-webkit-min-device-pixel-ratio: 0) {
    .device-pixel-ratio-test {
      width: 0px;
      height: 0px;
      background-image: url('https://app4.suitesting.dev/api/random-image?mail_id=${mailId}&tag=device-pixel-ratio');
    }
  }

  .multiple-background-image-test {
    width: 0px;
    height: 0px;
    background-image: url('https://app4.suitesting.dev/api/random-image?mail_id=${mailId}&tag=multiple-background-image-1'),
    url('https://app4.suitesting.dev/api/random-image?mail_id=${mailId}&tag=multiple-background-image-2');
  }

  @media (prefers-color-scheme: dark) {
    .dark-theme-test {
      width: 0px;
      height: 0px;
      background-image: url('https://app4.suitesting.dev/api/random-image?mail_id=${mailId}&tag=dark-theme');
    }
  }

  @media (prefers-color-scheme: light) {
    .light-theme-test {
      width: 0px;
      height: 0px;
      background-image: url('https://app4.suitesting.dev/api/random-image?mail_id=${mailId}&tag=light-theme');
    }
  }

  @media (prefers-color-scheme: no-preference) {
    .no-preference-theme-test {
      width: 0px;
      height: 0px;
      background-image: url('https://app4.suitesting.dev/api/random-image?mail_id=${mailId}&tag=no-preference-theme');
    }
  }

  .has-test:has(>.has-test-inner) {
    width: 0px;
    height: 0px;
    background-image: url('https://app4.suitesting.dev/api/random-image?mail_id=${mailId}&tag=has');
  }

  @supports(display: block) {
    .supports-test {
      width: 0px;
      height: 0px;
      background-image: url('https://app4.suitesting.dev/api/random-image?mail_id=${mailId}&tag=supports');
    }
  }

  .is-test:is(div) {
    width: 0px;
    height: 0px;
    background-image: url('https://app4.suitesting.dev/api/random-image?mail_id=${mailId}&tag=is');
  }

  @supports(display: flow-root) {
    .flow-root-test {
      width: 0px;
      height: 0px;
      background-image: url('https://app4.suitesting.dev/api/random-image?mail_id=${mailId}&tag=flow-root');
    }
  }
  `;
}

export default function RootLayout() {

  const mailId = Date.now() % 100 + 200;

  return (
    <html lang="en">
      <head>
        <style dangerouslySetInnerHTML={{ __html: createCss(mailId) }} />
        <link rel="stylesheet" href={`https://app4.suitesting.dev/api/css?mail_id=${mailId}&tag=link`} />
      </head>
      <body className={inter.className}>
        <h1>mail_id: {mailId}</h1>
        <picture style={{ height: '0px', width: '0px', visibility: 'hidden', opacity: '0' }}>
          <source src={`https://app4.suitesting.dev/api/random-image?mail_id=${mailId}&tag=picture`} />
          <img style={{ height: '0px', width: '0px', visibility: 'hidden', opacity: '0' }} src={`https://app4.suitesting.dev/api/random-image?mail_id=${mailId}&tag=picture-default`} alt="" />
        </picture>
        <div className='mobile-test'></div>
        <div className='desktop-test'></div>


        <div dangerouslySetInnerHTML={{ __html: `
          <!--[if mso]>
            <img src="https://app4.suitesting.dev/api/random-image?mail_id=${mailId}&tag=conditional-comment" />
          <![endif]-->
        ` }}></div>

        <div className='link-test'></div>

        <div className='lang-test' lang='en'></div>

        <div className='device-pixel-ratio-test'></div>

        <div className='multiple-background-image-test'></div>

        <div className='dark-theme-test'></div>
        <div className='light-theme-test'></div>
        <div className='no-preference-theme-test'></div>
        <div className='has-test'>
          <div className='has-test-inner'></div>
        </div>
        <div className='supports-test'></div>
        <div className='is-test'></div>
        <div className='flow-root-test'></div>
      </body>
    </html>
  )
}
