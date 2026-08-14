import "./globals.css";

export const metadata = {
  title: "ShikshaUpdate",
  description: "Jobs & Education Updates",
};

export default function RootLayout({ children }) {
  return (
    <html lang="hi">
      <body>{children}</body>
    </html>
  );
}
