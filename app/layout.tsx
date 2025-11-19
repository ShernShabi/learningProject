import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SkillSpark | Learn any skill in 5 minutes",
  description:
    "Discover bright, bite-sized lessons across niche skills with SkillSpark.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900 antialiased">{children}</body>
    </html>
  );
}
