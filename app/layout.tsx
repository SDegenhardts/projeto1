import './globals.css'
import { Inter } from 'next/font/google'
import { LuCrown } from 'react-icons/lu';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Femur Magna',
  description: 'Maison Femur Magna',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className='navegation'>
          <a href="/">Maison</a>
            <LuCrown className='firsticon'/>
          <a href="/about">À propos</a>
        </nav>
        {children}
        <footer className="footer">
          {/* <LuCrown/> */}
          <LuCrown className='firsticon'/>
          <a href="/contact">Contact</a>
          {/* <LuCrown/> */}
          <LuCrown className='firsticon'/>
        </footer>
      </body>
    </html>
  )
}
