import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AppMui from "./nextUI/AppNextUI";
import { Container } from "./components/layout/container/Index";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <AppMui>
          <Toaster />
          <Container>{children}</Container>
        </AppMui>
      </body>
    </html>
  );
}
