'use client';
import { useEffect } from 'react';
import './globals.css';

export default function RootLayout({ children }) {
  useEffect(() => {
    if (window.location.hash !== '') {
      history.replaceState(null, document.title, window.location.pathname);
    }

    window.scrollTo(0, 0);
    return () => {
      window.scrollTo(0, 0);
    };
  }, []);

  return (
    <html lang="ru">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <meta name="description" content="Portfollio front-end developer Alexey Pakhomov" />
        <meta name="keywords" content="Portfollio front-end" />
        <meta name="author" content="Alexey Pakhomov" />
        <title>Front-end Alexey Pakhomov</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
