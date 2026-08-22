'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  Gift,
  Zap,
  Clock,
  AlertTriangle,
  CheckCircle2,
  Shield,
  Users,
} from 'lucide-react';
import Link from 'next/link';

// 赠送活动数据
const GIFT_PROMOTIONS = [
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
];

// 订单类型定义
type OrderType = 'urgent' | 'regular';

// 价格数据
const PRICING_DATA: Record<
  OrderType,
  { label: string; icon: React.ElementType; color: string; glowColor: string }[]
> = {
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
};

// 注意事项数据
const NOTICES = [
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
];

export default function AccountBooster() {
  const [activeTab, setActiveTab] = useState<OrderType>('urgent');

  return (
    <div className="min-h-screen bg-background px-4 pb-20 pt-24">
      <div className="mx-auto max-w-7xl">
        {/* 返回按钮和标题 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <Link
            href="/"
            className="mb-6 inline-flex items-center gap-2 text-text-secondary transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            返回首页
          </Link>
          <h1 className="gradient-text mb-4 text-4xl font-bold text-white md:text-5xl">
            跑刀代肝
          </h1>
          <p className="mx-auto max-w-2xl text-text-secondary">
            专业代打哈夫币，高效安全，让您轻松致富
          </p>
        </motion.div>

        {/* 赠送活动区域 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="gradient-text mb-8 text-center text-2xl font-bold">
            🎁 下单赠送活动
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {GIFT_PROMOTIONS.map((promo, index) => (
              <motion.div
                key={promo.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass group relative cursor-pointer overflow-hidden rounded-2xl p-8 text-center"
                style={{ boxShadow: `0 0 30px ${promo.bgGlow}` }}
              >
                {/* 背景渐变 */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${promo.color} opacity-0 transition-opacity duration-300 group-hover:opacity-10`}
                />

                {/* 图标 */}
                <div
                  className={`relative mx-auto mb-4 h-16 w-16 rounded-full bg-gradient-to-br ${promo.color} flex items-center justify-center`}
                >
                  <promo.icon className="h-8 w-8 text-white" />
                </div>

                {/* 标题 */}
                <h3 className="gradient-text mb-2 text-2xl font-bold">
                  {promo.title}
                </h3>

                {/* 副标题 */}
                <p className="text-sm text-text-secondary">{promo.subtitle}</p>

                {/* 装饰边框 */}
                <div
                  className={`pointer-events-none absolute inset-0 rounded-2xl border-2 border-transparent transition-colors duration-300 group-hover:border-primary/30`}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 订单类型选择区域 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="gradient-text mb-8 text-center text-2xl font-bold">
            💰 订单类型
          </h2>

          {/* Tab 切换 */}
          <div className="mb-8 flex justify-center">
            <div className="glass inline-flex gap-2 rounded-2xl p-1.5">
              <button
                onClick={() => setActiveTab('urgent')}
                className={`rounded-xl px-8 py-3 font-semibold transition-all duration-300 ${
                  activeTab === 'urgent'
                    ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg'
                    : 'text-text-secondary hover:text-white'
                }`}
              >
                <Zap className="mr-2 inline h-4 w-4" />
                加急订单
              </button>
              <button
                onClick={() => setActiveTab('regular')}
                className={`rounded-xl px-8 py-3 font-semibold transition-all duration-300 ${
                  activeTab === 'regular'
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg'
                    : 'text-text-secondary hover:text-white'
                }`}
              >
                <Clock className="mr-2 inline h-4 w-4" />
                常规订单
              </button>
            </div>
          </div>

          {/* 价格卡片 */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2"
            >
              {PRICING_DATA[activeTab].map((item, index) => (
                <motion.div
                  key={`${activeTab}-${index}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                  whileHover={{ scale: 1.03, y: -5 }}
                  className="glass group relative cursor-pointer overflow-hidden rounded-2xl p-8 text-center"
                  style={{ boxShadow: `0 0 30px ${item.glowColor}` }}
                >
                  {/* 背景渐变 */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 transition-opacity duration-300 group-hover:opacity-10`}
                  />

                  {/* 图标 */}
                  <div
                    className={`relative mx-auto mb-4 h-14 w-14 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center`}
                  >
                    <item.icon className="h-7 w-7 text-white" />
                  </div>

                  {/* 价格信息 */}
                  <p className="gradient-text text-xl font-bold">
                    {item.label}
                  </p>

                  {/* 装饰边框 */}
                  <div
                    className={`pointer-events-none absolute inset-0 rounded-2xl border-2 border-transparent transition-colors duration-300 group-hover:border-primary/30`}
                  />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* 注意事项区域 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mx-auto max-w-4xl"
        >
          <h2 className="gradient-text mb-8 text-center text-2xl font-bold">
            ⚠️ 注意事项
          </h2>
          <div className="glass space-y-6 rounded-2xl p-8">
            {NOTICES.map((notice, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-blue-500">
                  <notice.icon className="h-5 w-5 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="mb-1 font-semibold text-white">
                    {notice.title}
                  </h4>
                  <p className="text-sm leading-relaxed text-text-secondary">
                    {notice.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 底部客服联系 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mt-12 text-center"
        >
          <p className="mb-4 text-text-secondary">还有其他问题？随时联系客服</p>
          <a
            href="mailto:dagong_service"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-blue-500 px-8 py-3 font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-primary/30"
          >
            <CheckCircle2 className="h-5 w-5" />
            联系客服
          </a>
        </motion.div>
      </div>
    </div>
  );
}
