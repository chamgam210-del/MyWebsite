import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chamath | Software Developer & AI Builder",
  description:
    "Portfolio of Chamath, a software developer building AI-powered Android apps, automation tools, local AI assistants, RAG systems, and full-stack products.",
  metadataBase: new URL("https://chamath.dev"),
  openGraph: {
    title: "Chamath | Software Developer & AI Builder",
    description:
      "Portfolio of Chamath, a software developer building AI-powered Android apps, automation tools, local AI assistants, RAG systems, and full-stack products.",
    type: "website",
    images: ["/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chamath | Software Developer & AI Builder",
    description:
      "AI-powered Android apps, automation tools, local AI assistants, RAG systems, and full-stack products.",
    images: ["/og-image.svg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${mono.variable} ${serif.variable}`}
    >
      <body className="min-h-screen bg-bg font-sans text-ink antialiased">
        <Sidebar />
        <div className="lg:pl-72">
          <main className="pt-14 lg:pt-0">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
