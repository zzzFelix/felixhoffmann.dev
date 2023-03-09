import './globals.css'

export const metadata = {
  title: 'Felix Hoffmann—software engineer',
  description: 'Personal website of software engineer Felix Hoffmann. Find blog posts, conference talks, and side projects. Felix loves web development, accessibility, and Kubernetes.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.png" />
        <link rel="preload" href="/flame-design-science.gif" as="image" />
        <link rel="preload" href="/flame-no-connection.gif" as="image" />
        <link rel="preload" href="/flame-success.gif" as="image" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>{children}</body>
    </html>
  )
}
