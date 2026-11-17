import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '物品撞车',
  description: '装备子弹、搜集品、哈夫币、活动限定与特勤处升级等游戏物资服务。',
}

export default function ItemsLayout({ children }: { children: React.ReactNode }) {
  return children
}
