// pages/_app.tsx
import type { AppProps } from 'next/app'
import localFont from 'next/font/local'
import '../app_backup/globals.css'
import { AuthProvider } from '../context/AuthContext'
import Header from '../component/Header'

const geistSans = localFont({
  src: "../app_backup/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
})

const geistMono = localFont({
  src: "../app_backup/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
})

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <AuthProvider>
        <main>
          <Header />
          <Component {...pageProps} />
        </main>
      </AuthProvider>
    </div>
  )
}
