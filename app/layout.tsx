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
  title: "Chamath Guruge | Software Engineer & AI Builder",
  description:
    "Chamath Guruge — Software Engineer II at Oliver Wyman Vector. Full-stack Java/Spring/React + AI integration. Building Android apps, RAG systems, and automation tools.",
  metadataBase: new URL("https://chamath.dev"),
  openGraph: {
    title: "Chamath Guruge | Software Engineer & AI Builder",
    description:
      "Software Engineer II at Oliver Wyman Vector. Full-stack development + generative AI integration. Markham, ON.",
    type: "website",
    images: ["/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chamath Guruge | Software Engineer & AI Builder",
    description:
      "Full-stack Java/Spring/React engineer integrating AI into how teams ship software.",
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
