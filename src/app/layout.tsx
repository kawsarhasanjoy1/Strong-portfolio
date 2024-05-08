import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TChildren } from "@/types/global";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kawsar-Dev",
  description: "Personal portfolio web app",
};

export default function RootLayout({ children }: TChildren) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster />
        <div>{children}</div>
      </body>
    </html>
  );
}
