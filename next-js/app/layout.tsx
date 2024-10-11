import React from "react";
import { BaseLayout } from "../components/BaseLayout";
import Nav from "../components/Nav/Nav";
import { Header } from "../../shared/components/Header";
import "../index.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <BaseLayout
          header={<Header />}
          nav={<Nav />}
        >
          {children}
        </BaseLayout>
      </body>
    </html>
  );
}
