import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '陪玩护航',
  description: '专业战术陪玩、高手护航、趣味挑战与定制服务，一站式电竞陪玩体验。',
}

export default function EscortLayout({ children }: { children: React.ReactNode }) {
  return children
}
