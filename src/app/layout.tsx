import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fotion | Welcome",
  description: "Write down what you think and think more",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
