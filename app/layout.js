import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/home-page/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rent it",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      {children}
      <Footer></Footer>
      </body>


    </html>
  );
}
