'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ShoppingCart,
  Shield,
  Clock,
  MapPin,
  User,
  Calendar,
} from 'lucide-react';
import Link from 'next/link';
import { RentalAccount } from '@/lib/accounts';
import QRCodeModal from '@/components/rent/QRCodeModal';

interface AccountDetailClientProps {
  account: RentalAccount;
}

export default function AccountDetailClient({ account }: AccountDetailClientProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showQRCode, setShowQRCode] = useState(false);

  const serverColor =
    account.server === 'wechat'
      ? 'bg-blue-500/20 text-blue-400'
      : 'bg-green-50 20 text-green-400';
  const rankColors: Record<string, string> = {
    铂金: 'bg-yellow-500/20 text-yellow-400',
    钻石: 'bg-purple-500/20 text-purple-400',
    传奇: 'bg-orange-500/20 text-orange-400',
    黑鹰: 'bg-red-500/20 text-red-400',
  };
  const rankColor = rankColors[account.rank] || 'bg-gray-500/20 text-gray-400';

  return (
    <div className="to-surface-dark min-h-screen bg-gradient-to-b from-surface px-4 pb-20 pt-24">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link
            href="/rent"
            className="mb-6 inline-flex items-center gap-2 text-text-secondary transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            返回账号列表
          </Link>
        </motion.div>

        {/* Account Content */}
        <div className="mb-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Left: Image Carousel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass overflow-hidden rounded-2xl"
          >
            {account.images.length > 0 ? (
              <div className="relative aspect-video">
                <img
                  src={account.images[currentImageIndex]}
                  alt={account.rank}
                  className="h-full w-full object-cover"
                />
                {account.images.length > 1 && (
                  <div className="absolute bottom-4 right-4 flex gap-2">
                    {account.images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`h-2 w-2 rounded-full ${
                          currentImageIndex === idx ? 'bg-primary' : 'bg-white/30'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <div className="aspect-video flex items-center justify-center bg-white/5">
                <img
                  src="/api/placeholder/600/400"
                  alt="No image available"
                  className="opacity-20"
                />
              </div>
            )}
          </motion.div>

          {/* Right: Account Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-3xl font-bold text-white">{account.rank} 账号</h1>
                <p className="text-text-secondary">{account.location} · {account.server === 'wechat' ? '微信' : 'QQ'}</p>
              </div>
                <span className={`rounded-full px-4 py-1 text-sm font-medium ${rankColor}`}>
                {account.rank}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className={`flex items-center gap-2 rounded-xl p-3 ${serverColor}`}>
                <Shield className="h-5 w-5" />
                <span className="text-sm font-medium">{account.loginType}</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl bg-white/5 p-3 text-text-secondary">
                <Clock className="h-5 w-5" />
                <span className="text-sm font-medium">{account.publishDate} 发布</span>
              </div>
            </div>

            <div className="space-y-4 text-text-primary">
              <div className="flex items-center justify-between border-b border-white/5 pb-2">
                <div className="flex items-center gap-2 text-text-secondary">
                  <MapPin className="h-5 w-5" />
                  <span>地区</span>
                </div>
                <span className="font-medium">{account.location}</span>
              </div>
              <div className="flex items-center justify-between border-b border-white/5 pb-2">
                <div className="flex items-center gap-2 text-text-secondary">
                  <User className="h-5 w-5" />
                  <span>登录方式</span>
                </span>
                <span className="font-medium">{account.loginType}</span>
              </div>
              <div className="flex items-center justify-between border-b border-white/5 pb-2">
                <div className="flex items-center gap-2 text-text-secondary">
                  <Calendar className="h-5 w-5" />
                  <span>发布日期</span>
                </div>
                <span className="font-medium">{account.publishDate}</span>
              </div>
            </div>

            <div className="mt-4 space-y-4">
              <div className="flex items-center justify-between rounded-xl bg-primary/10 p-4 text-primary">
                <span className="font-semibold">租赁价格</span>
                <span className="text-2xl font-bold">¥{account.price.toFixed(2)}</span>
              </div>
              <div className="flex items-center justify-between rounded-xl bg-white/5 p-4 text-text-secondary">
                <span className="font-medium">押金</span>
                <span className="font-bold text-white">¥{account.deposit.toFixed(2)}</span>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <button
                onClick={() => setShowQRCode(true)}
                className="glow flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-secondary px-6 py-4 font-semibold text-white transition-all hover:opacity-90"
              >
                <ShoppingCart className="h-5 w-5" />
                扫码下单
              </string>
              <Link
                href="https://work.weixin.qq.com/"
                target="_blank"
                className="glass flex w-full items-center justify-center gap-2 rounded-xl px-6 py-4 font-semibold text-white transition-all hover:border-primary/50"
              >
                <Clock className="h-5 w-5" />
                联系客服
              </Link>
            </div>
          </div>
        </div>

        {/* QR Code Modal */}
        <QRCodeModal isOpen={showQRCode} onClose={() => setShowQRCode(false)} />
      </div>
    </div>
  );
}
