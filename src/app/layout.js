import localFont from "next/font/local";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { DynaPuff } from "next/font/google";

const dynaPuff = DynaPuff({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sticky for your thoughts",
  description: "Social media app to post short thoughts on a sticky note",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={dynaPuff.className}>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
