// pages/_app.tsx
import type { AppProps } from 'next/app'
import localFont from 'next/font/local'
import '../styles/globals.css'
import { AuthProvider } from '../context/AuthContext'
import Header from '../component/Header'

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
})

const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
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
