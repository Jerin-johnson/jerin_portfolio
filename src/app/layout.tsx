import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jerin Johnson — Software Engineer",
  description:
    "Jerin Johnson — Full Stack MERN Developer building production-ready web applications, distributed systems, and cloud infrastructure.",
  metadataBase: new URL("https://jerinjohnson.dev"),
  openGraph: {
    title: "Jerin Johnson — Software Engineer",
    description:
      "Building systems that scale. Frontend experiences, backend architecture, distributed systems, cloud infrastructure.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-[var(--color-bg)] text-[var(--color-text)]">
        {children}
      </body>
    </html>
  );
}
