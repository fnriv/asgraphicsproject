import React from 'react';
import './styles/globals.scss';

export const metadata = {
  title: 'Next.js with Sass',
  description: 'A Next.js application using Sass for styling',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}