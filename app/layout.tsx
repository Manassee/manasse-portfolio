import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Manasseé Mazumbu | Portfolio",
  description:
    "Personal portfolio of Manasseé Mazumbu – .NET & full-stack developer. Showcasing projects, skills and experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de-DE" suppressHydrationWarning>
      <body className="bg-slate-950 text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
