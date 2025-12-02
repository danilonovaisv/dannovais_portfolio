// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Danilo Novais — Portfólio",
  description: "Portfólio institucional de Danilo Novais.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.variable} bg-[var(--color-surface-main)] text-[var(--color-text-primary)] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
