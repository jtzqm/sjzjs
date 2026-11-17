import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://sjzjs.pages.dev'),
  title: {
    default: '东非电竞 - 一站式陪玩门户',
    template: '%s | 东非电竞',
  },
  description: '东非电竞提供陪玩护航、跑刀代肝、物品撞车、部门任务与账号收号等电竞服务，挑陪陪、看价格，下一局立刻开始。',
  keywords: ['陪玩', '护航', '跑刀代肝', '物品撞车', '账号收号', '三角洲行动', '东非电竞'],
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    siteName: '东非电竞',
    title: '东非电竞 - 一站式陪玩门户',
    description: '陪玩护航、跑刀代肝、物品撞车、部门任务与账号收号，一站式电竞服务。',
  },
  twitter: {
    card: 'summary_large_image',
    title: '东非电竞 - 一站式陪玩门户',
    description: '一站式电竞陪玩与账号服务门户。',
  },
  robots: { index: true, follow: true },
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
        <Footer />
      </body>
    </html>
  )
}
