'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Gamepad2,
  Shield,
  FileText,
  CheckCircle2,
  Lock,
  HeartHandshake,
  ChevronDown,
  Menu,
  X,
} from 'lucide-react';
import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { href: '/', label: '首页' },
  { href: '/escort', label: '陪玩护航' },
  { href: '/account-booster', label: '跑刀代肝' },
  { href: '/items', label: '物品撞车' },
  { href: '/department-tasks', label: '部门任务、3*3保险' },
  { href: '/rent', label: '账号收号' },
  { href: '/contact', label: '联系客服' },
];

function RightsPanel() {
  return (
    <div className="p-4">
      <div className="mb-4 flex items-center gap-2 border-b border-white/10 pb-3">
        <Shield className="h-5 w-5 text-primary" />
        <h3 className="font-semibold text-white">平台权益保障</h3>
      </div>
      <div className="mb-4 rounded-lg bg-white/5 p-3">
        <div className="mb-2 flex items-center gap-2">
          <FileText className="h-4 w-4 text-accent" />
          <span className="text-sm font-medium text-white">营业执照</span>
        </div>
        <div className="flex min-h-[80px] items-center justify-center rounded bg-white/10 p-3">
          <p className="text-center text-xs text-text-muted">
            营业执照信息
            <br />
            <span className="text-primary">（预留展示位置）</span>
          </p>
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex items-start gap-2">
          <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
          <p className="text-xs text-text-secondary">资金托管担保交易，不满意可退</p>
        </div>
        <div className="flex items-start gap-2">
          <Lock className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
          <p className="text-xs text-text-secondary">隐私保护机制，账号信息安全</p>
        </div>
        <div className="flex items-start gap-2">
          <HeartHandshake className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
          <p className="text-xs text-text-secondary">7×24 小时客服在线，快速响应</p>
        </div>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [showRightsDropdown, setShowRightsDropdown] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMobileOpen(false);
    setShowRightsDropdown(false);
  }, [pathname]);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMobileOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="glass fixed left-0 right-0 top-0 z-50 border-b border-white/5"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <Link href="/" className="group flex items-center gap-2" aria-label="东非电竞首页">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary transition-transform group-hover:scale-110">
              <Gamepad2 className="h-6 w-6 text-white" />
            </div>
            <span className="hidden text-xl font-bold text-white sm:block">东非电竞</span>
          </Link>

          <div className="hidden items-center gap-6 md:flex lg:gap-7">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`whitespace-nowrap text-sm transition-colors hover:text-primary ${
                  pathname === link.href ? 'font-medium text-primary' : 'text-text-secondary'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div
              className="relative"
              onMouseEnter={() => setShowRightsDropdown(true)}
              onMouseLeave={() => setShowRightsDropdown(false)}
            >
              <button
                type="button"
                onClick={() => setShowRightsDropdown((v) => !v)}
                className="flex items-center gap-1 whitespace-nowrap text-sm text-text-secondary transition-colors hover:text-primary"
                aria-expanded={showRightsDropdown}
              >
                权益保障
                <ChevronDown className={`h-3 w-3 transition-transform ${showRightsDropdown ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {showRightsDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="glass absolute right-0 top-full mt-2 w-80 overflow-hidden rounded-xl shadow-xl"
                  >
                    <RightsPanel />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="rounded-lg p-2 text-white transition-colors hover:bg-white/10 md:hidden"
            aria-label="打开菜单"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm md:hidden"
            onClick={() => setMobileOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.25 }}
              className="glass absolute right-0 top-0 flex h-full w-[82%] max-w-sm flex-col overflow-y-auto border-l border-white/10 p-6 pt-20"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="absolute right-5 top-5 rounded-lg p-2 text-white transition-colors hover:bg-white/10"
                aria-label="关闭菜单"
              >
                <X className="h-6 w-6" />
              </button>

              <nav className="space-y-1">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block rounded-xl px-4 py-3 text-base transition-colors ${
                      pathname === link.href
                        ? 'bg-primary/15 font-medium text-primary'
                        : 'text-text-secondary hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div className="mt-8 overflow-hidden rounded-2xl border border-white/10">
                <button
                  type="button"
                  onClick={() => setShowRightsDropdown((v) => !v)}
                  className="flex w-full items-center justify-between px-4 py-3 text-left text-base text-text-secondary"
                  aria-expanded={showRightsDropdown}
                >
                  平台权益保障
                  <ChevronDown className={`h-4 w-4 transition-transform ${showRightsDropdown ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {showRightsDropdown && <RightsPanel />}
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
