import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dark-Portfolio",
  description: "Portfolio Yossef Diaa",
  icon: 'https://res.cloudinary.com/dxmudifi2/image/upload/v1720266957/Dark-Protofolio/Logo0_wuejyp.png'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
