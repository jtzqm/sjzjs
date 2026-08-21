'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { AlertCircle, CheckCircle2, X } from 'lucide-react'

interface OrderNoticeProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  rules: string[]
  instructions: string[]
}

export default function OrderNotice({ isOpen, onClose, title = '订单须知', rules, instructions }: OrderNoticeProps) {
  if (!isOpen) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="glass rounded-2xl p-6 max-w-lg w-full max-h-[80vh] overflow-y-auto relative"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5 text-text-muted" />
            </button>

            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{title}</h3>
                <p className="text-text-muted text-sm">请仔细阅读后确认</p>
              </div>
            </div>

            {/* Rules Section */}
            <div className="mb-6">
              <h4 className="text-primary font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                订单规则
              </h4>
              <div className="space-y-2">
                {rules.map((rule, index) => (
                  <motion.div
                    key={`rule-${index}`}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="flex items-start gap-3 p-3 bg-white/5 rounded-lg"
                  >
                    <span className="text-primary font-bold text-sm mt-0.5">{index + 1}.</span>
                    <p className="text-text-secondary text-sm leading-relaxed">{rule}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Instructions Section */}
            <div className="mb-6">
              <h4 className="text-secondary font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                订单须知
              </h4>
              <div className="space-y-2">
                {instructions.map((instruction, index) => (
                  <motion.div
                    key={`inst-${index}`}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * (rules.length + index) }}
                    className="flex items-start gap-3 p-3 bg-white/5 rounded-lg"
                  >
                    <span className="text-secondary font-bold text-sm mt-0.5">{index + 1}.</span>
                    <p className="text-text-secondary text-sm leading-relaxed">{instruction}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Confirm Button */}
            <button
              onClick={onClose}
              className="w-full py-3 bg-gradient-to-r from-primary to-secondary rounded-xl text-white font-semibold hover:opacity-90 transition-opacity"
            >
              我已了解，返回商品列表
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
