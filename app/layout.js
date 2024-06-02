'use client';
import './globals.css';

export default function RootLayout({ children }) {
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
