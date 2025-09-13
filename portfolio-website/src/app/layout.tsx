import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { theme } from '@/lib/theme';
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Karan Solanki - Full-Stack Developer",
  description: "Full-Stack Developer specializing in React, JavaScript, Node.js & AWS. Building scalable web applications with 4+ years of experience.",
  keywords: "Full-Stack Developer, React, JavaScript, Node.js, AWS, TypeScript, Web Developer, Software Engineer",
  authors: [{ name: "Karan Solanki" }],
  creator: "Karan Solanki",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bluewavelabs.ca/",
    title: "Karan Solanki - Full-Stack Developer",
    description: "Full-Stack Developer specializing in React, JavaScript, Node.js & AWS. Building scalable web applications with 4+ years of experience.",
    siteName: "Karan Solanki Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Karan Solanki - Full-Stack Developer",
    description: "Full-Stack Developer specializing in React, JavaScript, Node.js & AWS. Building scalable web applications with 4+ years of experience.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className={inter.className}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
