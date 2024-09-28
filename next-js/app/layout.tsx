import React from "react";
import "../index.css";
import { BaseLayout } from "../components/BaseLayout";
import Nav from "../components/Nav/Nav";
import { Header } from "../../shared/components/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <BaseLayout header={<Header />} nav={<Nav />}>{children}</BaseLayout>
      </body>
    </html>
  );
}
