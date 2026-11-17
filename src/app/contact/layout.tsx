import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '联系客服',
  description: '选择服务类别，扫码添加客服微信，获取陪玩与账号服务咨询。',
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
