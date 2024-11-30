import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";

const poppinsBlack = localFont({
  src: "./fonts/Poppins-Black.ttf",
  variable: "--font-poppins-black",
  weight: "900",
});
const poppinsBold = localFont({
  src: "./fonts/Poppins-Bold.ttf",
  variable: "--font-poppins-bold",
  weight: "700",
});
const poppinsRegular = localFont({
  src: "./fonts/Poppins-Regular.ttf",
  variable: "--font-poppins-regular",
  weight: "400",
});
const poppinsLight = localFont({
  src: "./fonts/Poppins-Light.ttf",
  variable: "--font-poppins-light",
  weight: "300",
});

export const metadata: Metadata = {
  title: "Quiz App",
  description: "Generated by Quiz app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${poppinsBlack.variable} 
          ${poppinsBold.variable} 
          ${poppinsRegular.variable} 
          ${poppinsLight.variable} 
          antialiased
        `}
      >
        <SessionProvider>
          {children}
          <Toaster
            position="top-right"
            reverseOrder={false}
          />
        </SessionProvider>
      </body>
    </html>
  );
}
