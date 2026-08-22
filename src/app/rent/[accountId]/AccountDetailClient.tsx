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

export default function AccountDetailClient({
  account,
}: AccountDetailClientProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showQRCode, setShowQRCode] = useState(false);

  const serverColor =
    account.server === 'wechat'
      ? 'bg-blue-500/20 text-blue-400'
      : 'bg-green-500/20 text-green-400';
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
            <div className="relative flex h-96 items-center justify-center bg-gradient-to-br from-surface-light to-surface">
              <span className="text-8xl">🎮</span>
            </div>
          </motion.div>

          {/* Right: Account Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col justify-between"
          >
            <div className="space-y-4">
              {/* ID & Basic Info */}
              <div className="flex items-center gap-2">
                <span className="rounded-lg bg-blue-500/20 px-3 py-1 font-mono text-sm text-blue-400">
                  {account.id}
                </span>
                <span
                  className={`rounded px-3 py-1 text-xs font-medium ${serverColor}`}
                >
                  {account.server === 'wechat' ? '微信区' : 'QQ区'}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl font-bold text-white">
                {account.location} - {account.rank}
              </h1>
              <p className="flex items-center gap-2 text-text-muted">
                <Calendar className="h-4 w-4" />
                上架时间：{account.publishDate}
              </p>

              {/* Price */}
              <div className="flex items-baseline gap-3">
                <span className="text-5xl font-bold text-red-400">
                  ¥{account.price.toFixed(2)}
                </span>
                {account.originalPrice && (
                  <span className="text-xl text-text-muted line-through">
                    ¥{account.originalPrice}
                  </span>
                )}
              </div>

              {/* Basic Info Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="glass rounded-xl p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span className="text-sm text-text-muted">收用地</span>
                  </div>
                  <p className="font-medium text-white">{account.location}</p>
                </div>

                <div className="glass rounded-xl p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <User className="h-4 w-4 text-primary" />
                    <span className="text-sm text-text-muted">登录方式</span>
                  </div>
                  <p className="font-medium text-white">{account.loginType}</p>
                </div>

                <div className="glass rounded-xl p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <Shield className="h-4 w-4 text-primary" />
                    <span className="text-sm text-text-muted">段位</span>
                  </div>
                  <p
                    className={`inline-block rounded px-2 py-1 text-xs font-medium ${rankColor}`}
                  >
                    {account.rank}
                  </p>
                </div>

                <div className="glass rounded-xl p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <span className="text-sm text-text-muted">押金</span>
                  </div>
                  <p className="font-medium text-white">
                    ¥{account.deposit.toFixed(2)}
                  </p>
                </div>
              </div>

              {/* Detailed Stats */}
              <div className="glass rounded-xl p-6">
                <h3 className="mb-4 text-lg font-bold text-white">账号详情</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex justify-between">
                    <span className="text-text-muted">纯币资产</span>
                    <span className="text-white">{account.pureCoin}m</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">汇率比例</span>
                    <span className="font-medium text-pink-400">
                      {account.ratio}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">体力等级</span>
                    <span className="text-orange-400">
                      {account.staminaLevel}级
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col gap-4">
              <button
                onClick={() => setShowQRCode(true)}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-4 font-bold text-white transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <ShoppingCart className="h-5 w-5" />
                立即租赁
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* QR Code Modal */}
      <QRCodeModal isOpen={showQRCode} onClose={() => setShowQRCode(false)} />
    </div>
  );
}
