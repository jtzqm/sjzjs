'use client';

import { motion } from 'framer-motion';
import { Headphones, QrCode } from 'lucide-react';

const CONTACT_SERVICES = [
  {
    id: 'escort',
    name: '陪玩护航',
    href: '/escort',
    icon: '🎮',
    gradientFrom: 'from-blue-500/20',
    gradientTo: 'to-blue-600/10',
  },
  {
    id: 'booster',
    name: '跑刀代肝',
    href: '/account-booster',
    icon: '⚔️',
    gradientFrom: 'from-purple-500/20',
    gradientTo: 'to-purple-600/10',
  },
  {
    id: 'items',
    name: '物品撞车',
    href: '/items',
    icon: '🎯',
    gradientFrom: 'from-green-500/20',
    gradientTo: 'to-green-600/10',
  },
  {
    id: 'department',
    name: '部门任务、3*3保险',
    href: '/department-tasks',
    icon: '📋',
    gradientFrom: 'from-orange-500/20',
    gradientTo: 'to-orange-600/10',
  },
  {
    id: 'rent',
    name: '账号收号',
    href: '/rent',
    icon: '🔑',
    gradientFrom: 'from-pink-500/20',
    gradientTo: 'to-pink-600/10',
  },
];

export default function Contact() {
  return (
    <div className="min-h-screen bg-background px-4 pb-20 pt-24">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20">
            <Headphones className="h-8 w-8 text-primary" />
          </div>
          <h1 className="gradient-text mb-4 text-4xl font-bold text-white md:text-5xl">
            联系客服
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-text-secondary">
            选择对应服务类别，添加客服微信获取帮助
          </p>
        </motion.div>

        {/* Contact Grid - 横向排列 */}
        <div className="space-y-4">
          {CONTACT_SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
              className="glass group rounded-2xl p-6 transition-all duration-300 hover:border-primary/30"
            >
              <div className="flex items-center justify-between">
                {/* Service Info - Left */}
                <div className="flex w-64 flex-shrink-0 items-center gap-4">
                  <div
                    className={`h-14 w-14 rounded-xl bg-gradient-to-br ${service.gradientFrom} ${service.gradientTo} flex items-center justify-center text-2xl`}
                  >
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-semibold text-white">
                      {service.name}
                    </h3>
                    <p className="text-sm text-text-muted">扫码添加客服微信</p>
                  </div>
                </div>

                {/* QR Codes - Right (横向排列) */}
                <div className="flex items-center gap-4">
                  {['客服1', '客服2'].map((qrName, qrIndex) => (
                    <div
                      key={qrName}
                      className="group/qr relative cursor-pointer"
                    >
                      {/* QR Code Placeholder */}
                      <div className="flex h-32 w-32 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-all duration-300 group-hover/qr:border-primary/30 group-hover/qr:bg-primary/5">
                        <div className="text-center">
                          <QrCode className="mx-auto mb-2 h-8 w-8 text-text-muted opacity-50" />
                          <p className="text-xs text-text-muted">
                            微信二维码占位符
                          </p>
                          <p className="mt-1 text-xs text-text-muted">
                            {qrName}
                          </p>
                        </div>
                      </div>

                      {/* Hover Label */}
                      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 transition-opacity duration-300 group-hover/qr:opacity-100">
                        <span className="rounded bg-background/80 px-2 py-1 text-xs text-primary">
                          {qrName}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-text-muted">
            💡 提示：二维码占位符将在后续替换为真实客服微信二维码
          </p>
        </motion.div>
      </div>
    </div>
  );
}
