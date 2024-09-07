'use client';

import ChakraUiProvider from '@/providers/chakra-ui.provider';
import TanstackQueryProvider from '@/providers/tanstackQuery.provider';

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <TanstackQueryProvider>
          <ChakraUiProvider>{children}</ChakraUiProvider>
        </TanstackQueryProvider>
      </body>
    </html>
  );
}
