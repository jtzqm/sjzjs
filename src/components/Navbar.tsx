'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Gamepad2,
  Shield,
  Headphones,
  FileText,
  CheckCircle2,
  Lock,
  HeartHandshake,
  ChevronDown,
} from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [showRightsDropdown, setShowRightsDropdown] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="glass fixed left-0 right-0 top-0 z-50 border-b border-white/5"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary transition-transform group-hover:scale-110">
            <Gamepad2 className="h-6 w-6 text-white" />
          </div>
          <span className="hidden text-xl font-bold text-white sm:block">
            东非电竞
          </span>
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-6 md:gap-8">
          <Link
            href="/"
            className="font-medium text-white transition-colors hover:text-primary"
          >
            首页
          </Link>
          <Link
            href="/escort"
            className="text-text-secondary transition-colors hover:text-primary"
          >
            陪玩护航
          </Link>
          <Link
            href="/account-booster"
            className="text-text-secondary transition-colors hover:text-primary"
          >
            跑刀代肝
          </Link>

          <Link
            href="/items"
            className="text-text-secondary transition-colors hover:text-primary"
          >
            物品撞车
          </Link>

          <Link
            href="/department-tasks"
            className="text-text-secondary transition-colors hover:text-primary"
          >
            部门任务、3*3保险
          </Link>

          <Link
            href="/rent"
            className="text-text-secondary transition-colors hover:text-primary"
          >
            账号收号
          </Link>

          {/* 权益保障 Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setShowRightsDropdown(true)}
            onMouseLeave={() => setShowRightsDropdown(false)}
          >
            <span className="cursor-default text-text-secondary transition-colors hover:text-primary">
              权益保障
            </span>
            <AnimatePresence>
              {showRightsDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="glass absolute right-0 top-full mt-2 w-80 overflow-hidden rounded-xl shadow-xl"
                >
                  <div className="p-4">
                    {/* Header */}
                    <div className="mb-4 flex items-center gap-2 border-b border-white/10 pb-3">
                      <Shield className="h-5 w-5 text-primary" />
                      <h3 className="font-semibold text-white">平台权益保障</h3>
                    </div>

                    {/* Business License */}
                    <div className="mb-4 rounded-lg bg-white/5 p-3">
                      <div className="mb-2 flex items-center gap-2">
                        <FileText className="h-4 w-4 text-accent" />
                        <span className="text-sm font-medium text-white">
                          营业执照
                        </span>
                      </div>
                      <div className="flex min-h-[80px] items-center justify-center rounded bg-white/10 p-3">
                        <p className="text-center text-xs text-text-muted">
                          营业执照信息
                          <br />
                          <span className="text-primary">（预留展示位置）</span>
                        </p>
                      </div>
                    </div>

                    {/* Guarantees */}
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                        <p className="text-xs text-text-secondary">
                          资金托管担保交易，不满意可退
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <Lock className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                        <p className="text-xs text-text-secondary">
                          隐私保护机制，账号信息安全
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <HeartHandshake className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                        <p className="text-xs text-text-secondary">
                          7×24 小时客服在线，快速响应
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            href="/contact"
            className="text-text-secondary transition-colors hover:text-primary"
          >
            联系客服
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
