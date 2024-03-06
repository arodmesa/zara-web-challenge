import type { Metadata } from "next";
import "./globals.css";
import FavoritesProvider from "./theme-provider";

export const metadata: Metadata = {
  title: "ZARA WEB CHALLENGE",
  description: "Answer to ZARA WEB CHALLENGE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <FavoritesProvider>{children}</FavoritesProvider>
      </body>
    </html>
  );
}
