import { Montserrat } from 'next/font/google';

const montserratFont = Montserrat({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-sans',
});

export const montserratFontClass = montserratFont.className