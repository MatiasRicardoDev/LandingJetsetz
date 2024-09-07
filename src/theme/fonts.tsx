import { Jost } from 'next/font/google';

const montserrat = Jost({ subsets: ['latin'] });

/** App Fonts */
export const fonts = {
  body: montserrat.style.fontFamily,
  heading: montserrat.style.fontFamily
};
