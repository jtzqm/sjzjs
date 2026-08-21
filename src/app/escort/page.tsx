'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, CheckCircle2, AlertCircle, X } from 'lucide-react'
import Link from 'next/link'
import { ESCORT_CATEGORIES, GENERAL_NOTICE } from '@/constants/escort'
import OrderNotice from '@/components/OrderNotice'

export default function Escort() {
  const [selectedCategory, setSelectedCategory] = useState(ESCORT_CATEGORIES[0])
  const [showNotice, setShowNotice] = useState(false)

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Link href="/" className="inline-flex items-center gap-2 text-text-secondary hover:text-primary transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" />
            返回首页
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 gradient-text">陪玩护航</h1>
          <p className="text-text-secondary max-w-2xl mx-auto">专业战术陪玩、高手护航、趣味挑战、定制服务，一站式三角洲行动体验</p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {ESCORT_CATEGORIES.map((cat, index) => (
            <motion.button
              key={cat.id}
              onClick={() => setSelectedCategory(cat)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={`glass rounded-2xl p-6 text-center cursor-pointer group relative overflow-hidden ${
                selectedCategory.id === cat.id ? 'border-primary' : ''
              }`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${cat.gradientFrom} ${cat.gradientTo} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              <div className="relative z-10">
                <div className="text-4xl mb-3">{cat.icon}</div>
                <h3 className="text-lg font-bold text-white mb-1">{cat.name}</h3>
                <p className="text-text-muted text-xs">{cat.description}</p>
              </div>
            </motion.button>
          ))}
        </motion.div>

        {/* Selected Category Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="glass rounded-2xl p-8 mb-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">{selectedCategory.icon}</span>
              <h2 className="text-2xl font-bold text-white">{selectedCategory.name}</h2>
            </div>

            {/* Rules Section */}
            <div className="mb-8">
              <h3 className="text-primary font-semibold mb-4 flex items-center gap-2 text-lg">
                <CheckCircle2 className="w-5 h-5" />
                订单规则
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {selectedCategory.rules.map((rule, index) => (
                  <motion.div
                    key={`rule-${index}`}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="flex items-start gap-3 p-4 bg-white/5 rounded-xl"
                  >
                    <span className="text-primary font-bold text-sm mt-0.5 min-w-[20px]">{index + 1}.</span>
                    <p className="text-text-secondary text-sm leading-relaxed">{rule}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Service Flow Section */}
            <div className="mb-8">
              <h3 className="text-accent font-semibold mb-4 flex items-center gap-2 text-lg">
                <CheckCircle2 className="w-5 h-5" />
                服务流程
              </h3>
              <div className="flex flex-wrap gap-3">
                {selectedCategory.serviceFlow.map((step, index) => (
                  <motion.div
                    key={`flow-${index}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 * index }}
                    className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-text-secondary text-sm"
                  >
                    <span className="w-5 h_5 flex items-center justify-center bg-primary/20 text-primary rounded-full text-xs font-bold">
                      {index + 1}
                    </span>
                    {step}
                    {index < selectedCategory.serviceFlow.length - 1 && (
                      <span className="text-text-muted">→</span>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Instructions Section */}
            <div className="mb-8">
              <h3 className="text-secondary font-semibold mb-4 flex items-center gap-2 text-lg">
                <CheckCircle2 className="w-5 h-5" />
                订单须知
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {selectedCategory.instructions.map((instruction, index) => (
                  <motion.div
                    key={`inst-${index}`}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * (selectedCategory.rules.length + index) }}
                    className="flex items-start gap-3 p-4 bg-white/5 rounded-xl"
                  >
                    <span className="text-secondary font-bold text-sm mt-0.5 min-w-[20px]">{index + 1}.</span>
                    <p className="text-text-secondary text-sm leading-relaxed">{instruction}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            ...existing code...


            {/* Order Button */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setShowNotice(true)}
                className="px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-xl text-white font-semibold hover:opacity-90 transition-opacity glow"
              >
                立即下单
              </button>
              <Link
                href="/login"
                className="px-8 py-4 glass rounded-xl text-white font-semibold hover:border-primary/50 transition-all text-center"
              >
                联系客服
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* General Notice */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="glass rounded-2xl p-6"
        >
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="text-white font-semibold mb-2">通用下单须知</h4>
              <p className="text-text-secondary text-sm whitespace-pre-line">{GENERAL_NOTICE}</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Order Notice Modal */}
      <OrderNotice
        isOpen={showNotice}
        onClose={() => setShowNotice(false)}
        title={`${selectedCategory.name} - 订单须知`}
        rules={selectedCategory.rules}
        instructions={selectedCategory.instructions}
      />
    </div>
  )
}
