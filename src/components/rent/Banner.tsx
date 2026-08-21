'use client'

import { motion } from 'framer-motion'

export default function Banner() {
  return (
    <div className="flex gap-4 mb-8">
      {/* 左侧大 Banner */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex-1 relative h-48 rounded-2xl overflow-hidden bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900"
      >
        <div className="absolute inset-0 flex items-center justify-between px-8">
          {/* 左侧文字 */}
          <div className="relative z-10 max-w-md">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              账号价值高？<span className="text-yellow-400">封号全赔付</span>
            </h2>
            <p className="text-xl text-blue-200 mb-6">专业全额包赔，让租赁更安心</p>
            <button className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl text-white font-bold hover:opacity-90 transition-opacity">
              立即了解
            </button>
          </div>
          {/* 右侧装饰 */}
          <div className="hidden md:block relative">
            <div className="w-48 h-48 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-full blur-3xl" />
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl">🛡️</span>
          </div>
        </div>
      </motion.div>

      {/* 右侧小卡片 */}
      <div className="w-72 hidden lg:flex flex-col gap-4">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1 glass rounded-2xl p-4 flex items-center gap-3"
        >
          <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
            <span className="text-2xl">🏆</span>
          </div>
          <div>
            <h3 className="text-white font-bold">俱乐部合作点我</h3>
            <p className="text-text-muted text-sm">点击咨询入驻详情</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex-1 glass rounded-2xl p-4 flex items-center gap-3"
        >
          <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
            <span className="text-2xl">💬</span>
          </div>
          <div>
            <h3 className="text-white font-bold">投诉建议</h3>
            <p className="text-text-muted text-sm">您的意见我来解决</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
