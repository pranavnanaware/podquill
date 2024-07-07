import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import AudioProvider from "@/providers/AudioProvider";
import ConvexClerkProvider from "@/providers/ConvexClerkProvider";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PodQuill",
  description: "Generate your podcasts using AI",
  icons: {
    icon: "/icons/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ConvexClerkProvider>
      <html lang="en">
        <AudioProvider>
          <body className={`${manrope.className}`}>{children}</body>
        </AudioProvider>
      </html>
    </ConvexClerkProvider>
  );
}
