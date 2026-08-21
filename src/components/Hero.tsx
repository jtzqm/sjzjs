'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Clock, Shield, Star } from 'lucide-react'

const stats = [
  { icon: Clock, value: '30s', label: '平均匹配时长', desc: '说出想玩的游戏, 立刻为你匹配在线陪陪' },
  { icon: Shield, value: '100%', label: '订单资金托管', desc: '担保交易 · 不满意可退' },
  { icon: Star, value: '4.9', label: '真实订单好评', desc: '★★★★★' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[128px]" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-4">东非电竞 · 一站式陪玩门户</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            挑陪陪, 看价格,<br />
            <span className="gradient-text">下一局立刻开始.</span>
          </h1>
          <p className="text-lg text-text-secondary mb-10 max-w-2xl mx-auto">
            先选游戏品类, 再挑心仪项目. 加客服微信或注册账号, 30 秒匹配陪陪.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a href="mailto:dagong_service" className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-xl text-white font-semibold hover:opacity-90 transition-all glow">
              加客服微信
              <span>›</span>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="text-center"
              >
                <div className="flex items-center justify-center gap-2 mb-2">
                  <stat.icon className="w-5 h-5 text-primary" />
                  <span className="text-3xl md:text-4xl font-bold gradient-text">{stat.value}</span>
                </div>
                <p className="text-white font-medium text-sm">{stat.label}</p>
                <p className="text-text-muted text-xs mt-1">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
