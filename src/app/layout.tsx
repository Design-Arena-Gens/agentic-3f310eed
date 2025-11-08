import type { Metadata } from "next";
import { Orbitron, Outfit } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron"
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit"
});

export const metadata: Metadata = {
  title: "Alien Arrival with Veo 3 | Cosmic Storyboard",
  description:
    "Interactive guide in Hindi for crafting a Veo 3 video where an alien arrives on Earth. Explore prompts, moodboards, and motion tips."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hi" className={`${orbitron.variable} ${outfit.variable}`}>
      <body className="min-h-screen bg-space-dark text-white antialiased">{children}</body>
    </html>
  );
}
