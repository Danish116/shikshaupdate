import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "ShikshaUpdate | Government Jobs & Education Updates",
  description: "Latest Government Jobs, Private Jobs, Results, Admit Card and Education News.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="hi">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
