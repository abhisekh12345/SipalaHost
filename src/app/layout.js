import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import StoreProviders from "@/redux/StoreProviders";
import Footer from "@/components/Footer";




const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
       <StoreProviders >
         <Header />
           <main style={{marginTop : "90px",}}>
             {children}
           </main>
           <Footer />
       </StoreProviders>
      </body>
    </html>
  );
}
