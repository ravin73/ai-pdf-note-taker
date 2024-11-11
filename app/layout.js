import localFont from "next/font/local";
import "./globals.css";
import {Outfit} from "next/font/google"
import Provider from "./provider";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";



export const metadata = {
  title: "AI PDF Notes",
  description: "Generated by create next app",
};

const outfit=Outfit({subsets:['latin']})

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={outfit.className}
      >
        <Provider>
          {children}
        </Provider>
        <Toaster />

      </body>
    </html>
    </ClerkProvider>
  );
}
