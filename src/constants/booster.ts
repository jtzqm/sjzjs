// 跑刀代肝栏目数据配置（唯一数据源）
import type { ElementType } from 'react'
import { Gift, Users, Zap, Clock, Shield, AlertTriangle } from 'lucide-react'
import { SITE_CONFIG } from '@/config/site'

export type OrderType = 'urgent' | 'regular'

export interface Promotion {
  id: number
  title: string
  subtitle: string
  icon: ElementType
  color: string
  bgGlow: string
}

export const GIFT_PROMOTIONS: Promotion[] = [
  {
    id: 1,
    title: '下单赠送5000万',
    subtitle: '送个人黑人祝福语视频一条',
    icon: Gift,
    color: 'from-yellow-500 to-orange-500',
    bgGlow: 'rgba(234, 179, 8, 0.15)',
  },
  {
    id: 2,
    title: '下单赠送3亿',
    subtitle: '送三人黑人举牌视频一条',
    icon: Users,
    color: 'from-purple-500 to-pink-500',
    bgGlow: 'rgba(168, 85, 247, 0.15)',
  },
  {
    id: 3,
    title: '下单赠送5亿',
    subtitle: '送5人以上黑人举牌视频一条',
    icon: Users,
    color: 'from-red-500 to-rose-500',
    bgGlow: 'rgba(239, 68, 68, 0.15)',
  },
]

export interface PricingItem {
  label: string
  icon: ElementType
  color: string
  glowColor: string
}

export const PRICING_DATA: Record<OrderType, PricingItem[]> = {
  urgent: [
    {
      label: '6/9格保险  45/1000万',
      icon: Zap,
      color: 'from-yellow-400 to-orange-500',
      glowColor: 'rgba(234, 179, 8, 0.2)',
    },
    {
      label: '2/4格保险  50/1000万',
      icon: Zap,
      color: 'from-yellow-400 to-orange-500',
      glowColor: 'rgba(234, 179, 8, 0.2)',
    },
  ],
  regular: [
    {
      label: '6/9格保险  40/1000万',
      icon: Clock,
      color: 'from-blue-400 to-cyan-500',
      glowColor: 'rgba(59, 130, 246, 0.2)',
    },
    {
      label: '2/4格保险  45/1000万',
      icon: Clock,
      color: 'from-blue-400 to-cyan-500',
      glowColor: 'rgba(59, 130, 246, 0.2)',
    },
  ],
}

export interface Notice {
  icon: ElementType
  title: string
  content: string
}

export const BOOSTER_NOTICES: Notice[] = [
  {
    icon: Shield,
    title: '账号问题说明',
    content: '黑人跑刀可以解决200T，匹配池黑等等轻度账号问题。',
  },
  {
    icon: AlertTriangle,
    title: '掉号情况说明',
    content:
      '个别账号（高危，刚被追缴，未满级，存在大额撞车记录等）会出现频繁掉号情况，此为正常现象，不必担心，约登录3次左右就不会再出现。',
  },
  {
    icon: Shield,
    title: '安全设备要求',
    content:
      '为了确保您的账号安全，请确定您的腾讯游戏安全中心信任设备只有包含我方设备在内的3个设备。',
  },
  {
    icon: Clock,
    title: '代肝效率说明',
    content: '普通代肝每日约为1500万哈夫币，加急代肝每日约为2500万哈夫币。',
  },
]

// 保留原有配置导出，供后续功能使用
export const BOOSTER_GROUPS = [
  { id: 'booster', name: '跑刀代肝', categories: ['baoxian'] },
]

export const BOOSTER_NOTICE = {
  title: '账号代练须知',
  rules: [
    '跑刀可以解决200T，匹配池异常等轻度账号问题。',
    '个别账号（高危，刚被追缴，未满级，存在大额撞车记录等）会出现频繁掉号情况，此为正常现象，不必担心，约登录3次左右就不会再出现。',
    '为了确保您的账号安全，请确定您的腾讯游戏安全中心信任设备只有包含我方设备在内的3个设备。',
  ],
  instructions: [
    '下单时请提供您的游戏账号、区服、角色名以及所需服务类型',
    '客服微信：' + SITE_CONFIG.wechat + '（工作时间 9:00-24:00）',
  ],
}
