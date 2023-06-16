import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from './components/Navigation/NavBar';
import ThemeBG from './components/ThemeBackground/ThemeBG';
import Providers from "./providers";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Heart | Portfolio',
  description: 'my name is heart...',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} theme w-full h-screen`}>
        <ThemeBG />
        <Providers>
          <NavBar />
          {children}
        </Providers>
      </body>
    </html>
  )
}
