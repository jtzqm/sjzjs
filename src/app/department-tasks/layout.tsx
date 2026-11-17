import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '部门任务、3*3保险',
  description: '专业部门任务代做，多种保险方案保障游戏物资安全。',
}

export default function TasksLayout({ children }: { children: React.ReactNode }) {
  return children
}
