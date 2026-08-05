import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins'
});

export const metadata = {
  title: 'JadeTimes | Global Media, News & Publishing Platform',
  description: 'Delivering objective global news, in-depth business reports, tech insights, and scientific discoveries.',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    title: 'JadeTimes | Global Media, News & Publishing Platform',
    description: 'Delivering objective global news, in-depth business reports, tech insights, and scientific discoveries.',
    url: 'https://www.jadetimes.com',
    siteName: 'JadeTimes',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JadeTimes | Global Media, News & Publishing Platform',
    description: 'Delivering objective global news, in-depth business reports, tech insights, and scientific discoveries.',
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  );
}
