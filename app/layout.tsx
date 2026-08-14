import type { ReactNode } from "react";

export const metadata = {
  title: "ShikshaUpdate",
  description: "Jobs & Education Updates Portal",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="hi">
      <body>{children}</body>
    </html>
  );
}
