import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "SEA Catering",
  description: "Your reliable food companion",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased text-[#242424] bg-[#FBF8F3]">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
