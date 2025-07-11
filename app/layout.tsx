import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import { SiteFooter } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { ThemeProvider } from "next-themes";

const folioFont = localFont({
  src: [
    {
      path: "../public/fonts/folio-std-webfont/Folio-Std-Medium.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/folio-std-webfont/Folio-Std-Bold.woff",
      weight: "600",
      style: "bold",
    },
    {
      path: "../public/fonts/folio-std-webfont/Folio-Std-Light.woff",
      weight: "300",
      style: "light",
    },
  ],
  variable: "--font-folio",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Colour One",
  description: "Colour One is an independent art advisory with more than a decade of experience advising our clients across modern and contemporary art.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${folioFont.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <nav className="bg-background z-100 mx-auto sticky top-0">
            <Navigation />
          </nav>
          <div className="pb-[24] pt-[80] sm:pt-[0]">
            {children}
          </div>
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
