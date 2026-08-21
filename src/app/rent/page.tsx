'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Banner from '@/components/rent/Banner'
import { QrCode, MessageCircle, CheckCircle2 } from 'lucide-react'
import Image from 'next/image'

// 客服数据配置
const CUSTOMER_SERVICES = [
  {
    id: 1,
    name: '客服 1',
    qrCode: '/api/placeholder/200/200', // 占位图，稍后替换
    status: 'online',
    wechat: 'service_1'
  },
  {
    id: 2,
    name: '客服 2',
    qrCode: '/api/placeholder/200/200', // 占位图，稍后替换
    status: 'online',
    wechat: 'service_2'
  },
  {
    id: 3,
    name: '客服 3',
    qrCode: '/api/placeholder/200/200', // 占位图，稍后替换
    status: 'offline',
    wechat: 'service_3'
  }
]

export default function Rent() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 bg-gradient-to-b from-surface to-surface-dark">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 gradient-text">联系客服</h1>
          <p className="text-text-secondary max-w-2xl mx-auto">
            请添加下方客服微信，并发送您的账号信息进行咨询与提交。
          </p>
        </motion.div>

        {/* Contact Cards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
        >
          {CUSTOMER_SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              className="glass rounded-3xl p-8 flex flex-col items-center text-center group hover:border-primary/50 transition-all duration-300"
            >
              <div className="relative mb-6">
                <div className="w-48 h-48 rounded-2xl overflow-hidden border-2 border-white/10 group-hover:border-primary/30 transition-colors">
                  <Image
                    src={service.qrCode}
                    alt={service.name}
                    width={192}
                    height={192}
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-primary text-white p-2 rounded-full shadow-lg">
                  <QrCode className="w-5 h-5" />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
              
              <div className="flex items-center gap-2 mb-6">
                <span className={`w-2 h-2 rounded-full ${service.status === 'online' ? 'bg-green-500 animate-pulse' : 'bg-gray-500'}`} />
                <span className="text-text-sm text-text-secondary">
                  {service.status === 'online' ? '在线咨询' : '暂不在线'}
                </span>
              </div>

              <div className="w-full pt-6 border-t border-white/5">
                <p className="text-text-muted text-sm mb-4">微信 ID: {service.wechat}</p>
                <button className="w-full py-3 bg-white/5 hover:bg-primary/20 text-white rounded-xl transition-colors flex items-center justify-center gap-2 group-hover:text-primary">
                  <MessageCircle className="w-4 h-4" />
                  立即添加
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 rounded-full text-text-secondary text-sm">
            <CheckCircle2 className="w-4 h-4 text-primary" />
            <span>添加成功后，请直接发送账号详情</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
