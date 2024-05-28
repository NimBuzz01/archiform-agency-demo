import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import ScrollProvider from "@/components/ScrollProvider";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home | Archiform Agency",
  description:
    "Dive into a world of creative and innovative architectural concepts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="scrollbar-thin scrollbar-thumb-cmprimary scrollbar-track-cmsecondary"
    >
      <body className={`${raleway.className} bg-cmsecondary text-cmprimary`}>
        <ScrollProvider>{children}</ScrollProvider>
      </body>
    </html>
  );
}
