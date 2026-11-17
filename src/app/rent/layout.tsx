import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '账号收号',
  description: '各类游戏账号租赁与收号服务，查看账号详情、价格与押金信息。',
}

export default function RentLayout({ children }: { children: React.ReactNode }) {
  return children
}
