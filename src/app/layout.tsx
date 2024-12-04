import { Poppins } from "next/font/google";
import type { Metadata } from "next";

import { ThemeProvider } from "@/providers/theme-provider";

import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Fotion | Welcome",
  description: "Write down what you think and think more",
};

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable} suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
