import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Firm Website",
  description: "Sample firm landing page built with Next.js and Bun",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
