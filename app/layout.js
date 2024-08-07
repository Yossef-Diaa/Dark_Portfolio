import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ThemeProvider } from "./components/theme-provider"


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dark-Portfolio",
  description: "Portfolio Yossef Diaa",
  icon: 'https://res.cloudinary.com/dxmudifi2/image/upload/v1720266957/Dark-Protofolio/Logo0_wuejyp.png'
};
  
export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
        <Navbar/>
        {children}
        <Footer/>
        </ThemeProvider>

        </body>
    </html>
  );
}
