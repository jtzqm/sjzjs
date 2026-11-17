'use client';

import Link from 'next/link';
import { Gamepad2 } from 'lucide-react';
import { SITE_CONFIG } from '@/config/site';

const SERVICE_LINKS = [
  { href: '/escort', label: '陪玩护航' },
  { href: '/account-booster', label: '跑刀代肝' },
  { href: '/items', label: '物品撞车' },
  { href: '/department-tasks', label: '部门任务' },
  { href: '/rent', label: '账号收号' },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-background/80">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Link href="/" className="inline-flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary">
                <Gamepad2 className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold text-white">{SITE_CONFIG.name}</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-text-muted">
              一站式陪玩门户，提供陪玩护航、账号收号、物品撞车、部门任务等多类电竞服务。
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">服务栏目</h3>
            <ul className="space-y-2">
              {SERVICE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-text-secondary transition-colors hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">联系我们</h3>
            <p className="text-sm text-text-secondary">客服微信：{SITE_CONFIG.wechat}</p>
            <Link
              href={SITE_CONFIG.contactHref}
              className="mt-3 inline-flex items-center rounded-lg bg-primary/15 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/25"
            >
              查看客服二维码
            </Link>
          </div>
        </div>

        <div className="mt-10 border-t border-white/5 pt-6 text-center text-xs text-text-muted">
          <p>© {new Date().getFullYear()} {SITE_CONFIG.name} · 仅供学习与展示使用</p>
        </div>
      </div>
    </footer>
  );
}
