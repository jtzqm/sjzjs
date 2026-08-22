import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'

export const metadata: Metadata = {
  title: '东非电竞 - 一站式陪玩门户',
  description: '挑陪陪, 看价格, 下一局立刻开始.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}
