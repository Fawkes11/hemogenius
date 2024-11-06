import { Patrick_Hand } from 'next/font/google'
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";


const patrickHand = Patrick_Hand({
  subsets: ['latin'],
  weight: '400',
  variable: "--PatrickHandSC-Regular",
})


export const metadata = {
  title: "Immunohematology",
  description: "Phenotype card image generator",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${patrickHand.className} antialiased`}
      ><NextUIProvider>
          {children}
        </NextUIProvider>
      </body>
    </html>
  );
}
