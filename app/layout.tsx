import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// hooks
import { AuthProvider } from "./context/AuthContext";
import Header from "./components/Header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "dynamic dash",
  description: "a dynamic dashboad",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} >
        <AuthProvider>
          <main>
            <Header/>
            {children}
          </main>
        </AuthProvider>
      </body>
    </html>
  );
}
