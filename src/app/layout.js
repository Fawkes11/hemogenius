import {  Lato } from 'next/font/google'
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";



const lato = Lato({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: '400'
})



export const metadata = {
  title: "Immunohematology",
  description: "Phenotype card image generator",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${lato.className} antialiased`}
      ><NextUIProvider>
          {children}
        </NextUIProvider>
      </body>
    </html>
  );
}
