import React from "react";
import { BaseLayout } from "../components/BaseLayout";
import Nav from "../components/Nav/Nav";
import { Header } from "../../shared/components/Header";
import localFont from "next/font/local";
import "../index.css";

const OpenSans = localFont({
  src: "../../shared/fonts/OpenSans-Light.ttf",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={OpenSans.className}>
        <BaseLayout header={<Header />} nav={<Nav />}>
          {children}
        </BaseLayout>
      </body>
    </html>
  );
}
